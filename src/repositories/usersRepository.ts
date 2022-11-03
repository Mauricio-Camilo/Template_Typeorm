import { AppDataSource } from "../data-source.js"
import User from "../entities/User.js"

export const userRepository = AppDataSource.getRepository(User);

async function checkCpf(cpf : string) {
    console.log("cpf: ",cpf);
  return await userRepository.findOne({
      where: {cpf}
  })
}

async function registerUser(user : any) {
    await userRepository.save(user);
}

async function getAllUsers(){
    return await userRepository.find();
}

async function checkUserById(id : number) {
  return await userRepository.findOne({
      where: {id}
  })
}

async function deleteUserById(id: number) {
    await userRepository.delete({id})
}

export const usersRepository = {
    checkCpf,
    registerUser,
    getAllUsers,
    checkUserById,
    deleteUserById,
}