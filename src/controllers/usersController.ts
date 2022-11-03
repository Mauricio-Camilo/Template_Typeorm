import { Request, Response } from "express";
import { usersService } from "../services/usersService.js";

export async function createUser (req: Request, res: Response) {
    await usersService.createUser(req.body);
    res.status(201).send('User created');
}

export async function listUsers (req: Request, res: Response) {
    const users = await usersService.listUsers();
    res.status(200).send(users);
}

export async function deleteUser (req: Request, res: Response) {
    const {id} = req.params;
    await usersService.deleteUserById(parseInt(id));
    res.status(200).send("User deleted");
}

/* FORMA ALTERNATIVA DE CRIAR CONTROLLERS */
export class TestController {
    async create(req: Request, res: Response) {
        /* Aqui coloca normalmente os comandos do controlador */
        res.send("Controlador teste funcionando")
    }
}

