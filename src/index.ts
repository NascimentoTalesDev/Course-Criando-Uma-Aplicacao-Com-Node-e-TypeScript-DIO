import express, { Request, Response } from "express"
import {UserController} from "./controller/UserController"

const server = express()
server.use(express.json())

const PORT = 5000

const userController = new UserController()

server.get("/", ( request : Request, response: Response ) =>{
    return response.json({ message: "Hello"})
})

//create a user
server.get("/user", userController.getAllUsers )
server.post("/user", userController.createUser )

server.listen(PORT, () => {
    console.log("Server on");
})

