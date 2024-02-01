import express, { Request, Response } from "express"
import { router } from "./routes"

const server = express()
server.use(express.json())

const PORT = 5000


server.get("/", ( request : Request, response: Response ) =>{
    return response.json({ message: "Hello"})
})

server.use(router)

server.listen(PORT, () => {
    console.log("Server on");
})

