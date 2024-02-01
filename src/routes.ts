import { Router } from "express";
import {UserController} from "./controller/UserController"
const userController = new UserController()

export const router = Router()

router.get("/user", userController.getAllUsers )
router.post("/user", userController.createUser )
