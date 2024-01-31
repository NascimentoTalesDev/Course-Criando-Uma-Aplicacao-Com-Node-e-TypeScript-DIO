import  { Request, Response } from "express"

const db = [ 
    {
        name: "joão",
        email: 'joão@gmail.com'
    }
]

export class UserController {
    createUser =  ( request : Request, response: Response ) => {
        const user = request.body
        db.push(user)
        console.log(db);
        
        return response.status(201).json({ message: "Usuário criado com sucesso"})
    }
}
