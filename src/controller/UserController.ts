import  { Request, Response } from "express"
import { UserService } from "../service/UserService"
export class UserController {
    createUser =  ( request : Request, response: Response ) => {
        const userService = new UserService()
        const user = request.body
        
        if (!user.name)return response.status(422).json({ message : "O nome é obrigatório" })     
        if (!user.email)return response.status(422).json({ message : "O email é obrigatório" })     
        
        userService.createUser(user.name, user.email)
        
        return response.status(201).json({ message: "Usuário criado com sucesso"})
    }
    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserService()
        const users = userService.getAllUsers()

        return response.json(users)

    }
}
