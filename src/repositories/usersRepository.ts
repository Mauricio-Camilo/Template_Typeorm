import { AppDataSource } from "../data-source.js"
import Seller from "../entities/Seller.js"

export const userRepository = AppDataSource.getRepository(Seller);

async function checkCpfById(id : number) {
    console.log("CNPJ: ",cnpj);
  return await sellerRepository.findOne({
      where: {company_cnpj: cnpj}
  })
}

async function registerUser(seller : any) {
    await sellerRepository.save(seller);
}

async function getAllUsers(){
    return await sellerRepository.find();
}


async function deleteUserById(id: number) {
}


export const usersRepository = {
    checkCpfById,
    registerUser,
    getAllUsers,
    checkSellerById,
    deleteUserById,
}