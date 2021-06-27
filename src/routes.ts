import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ensureAunthenticated } from "./middlewares/ensureAuthenticated"
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController"
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController"
import { ListTagsController } from "./controllers/ListTagsController"
import { ListUsersController } from "./controllers/ListUsersController"
import { ListComplimentsController } from "./controllers/ListComplimentsController"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listComplimentsController = new ListComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()


router.post(
  "/tags",
  ensureAunthenticated,
  ensureAdmin,
  createTagController.handle
)

router.post(
  "/users", 
  createUserController.handle
)

router.post(
  "/login", 
  authenticateUserController.handle
)

router.post(
  "/compliments",
  ensureAunthenticated,
  createComplimentController.handle
)

router.get(
  "/compliments",
  ensureAunthenticated,
  listComplimentsController.handle
)

router.get(
  "/users/compliments/send",
  ensureAunthenticated,
  listUserSendComplimentsController.handle
)

router.get(
  "/users/compliments/receive",
  ensureAunthenticated,
  listUserReceiveComplimentsController.handle
)

router.get(
  "/tags",
  ensureAunthenticated,
  listTagsController.handle
)

router.get(
  "/users",
  ensureAunthenticated,
  listUsersController.handle
)

export { router }