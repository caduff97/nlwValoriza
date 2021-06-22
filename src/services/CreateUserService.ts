import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {

  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    if (!email) {
      return "email incorrect"
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      return "User already exists"
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }