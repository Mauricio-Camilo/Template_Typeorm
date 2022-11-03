import { Request, Response } from "express";
import { usersService } from "../services/usersService.js";

export async function createUser (req: Request, res: Response) {
    // await sellersService.createUser(req.body);
    res.status(201).send('User created');
}

export async function listUsers (req: Request, res: Response) {
    // const companies = await usersService.listUsers();
    res.status(200).send("Teste");
}

export async function deleteUser (req: Request, res: Response) {
    const {id} = req.params;
    // await UsersService.deleteUser(parseInt(id));
    res.status(200).send("Company deleted");
}
