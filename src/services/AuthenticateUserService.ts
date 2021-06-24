import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAunthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAunthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({
      email
    })

    if (!user) throw new Error("Email/Password incorrect")

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) throw new Error("Email/Password incorrect")

    const token = sign({
      email: user.email,
    }, "10b936f0ca7326790d27f12acbe1c44b", {
      subject: user.id,
      expiresIn: "1d"
    })

    return token
  }
}

export { AuthenticateUserService }