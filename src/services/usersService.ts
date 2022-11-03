import { usersRepository } from "../repositories/usersRepository.js";

async function createUser(user: any) {
    console.log("Entrou no service", user);
   
    const checkUser = await usersRepository.checkCpf(user.cpf);
    console.log(checkUser);

    if (checkUser) {
        throw { name: "alreadyExists", message: "CPF already exists"}
    }

    await usersRepository.registerUser(user);
}

async function listUsers() {
    const sellers = await usersRepository.getAllUsers();
    return sellers;
}

async function deleteUserById(userId: number) {
    await usersService.checkUserId(userId);
    await usersRepository.deleteUserById(userId);
}

async function checkUserId(userId: number) {
    const response = await usersRepository.checkUserById(userId);
    if (!response) {
        throw { name: "notFound", message: "User not found"}
    }
    else return response;
}


export const usersService = {
    createUser,
    listUsers,
    checkUserId,
    deleteUserById,
}