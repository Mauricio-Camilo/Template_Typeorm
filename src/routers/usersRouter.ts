import { Router } from "express";
import { createUser, deleteUser, listUsers } from "../controllers/usersController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import userSchema from "../schemas/usersSchema.js";

const usersRouter = Router();

usersRouter.post("/users", validateSchema(userSchema), createUser);
usersRouter.get("/users", listUsers);
usersRouter.delete("/users/:id", deleteUser);

export default usersRouter;