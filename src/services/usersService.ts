import { sellersRepository } from "../repositories/sellersRepository.js";

async function createUser(seller: any) {
    console.log("Entrou no service");
   
    const checkUser = await sellersRepository.checkCpfById(seller.company_cnpj);
    console.log(checkSellerCnpj);

    if (checkUser) {
        throw { name: "alreadyExists", message: "CPF already exists"}
    }

    await sellersRepository.registerUser(seller);
}

async function listUsers() {
    const sellers = await sellersRepository.getAllUsers();
    return sellers;
}

async function deleteUserById(companyId: number) {
    // await companiesService.checkCompanyId(companyId);
    // await sellersRepository.deleteSellerById(companyId);
}

async function checkUserId(companyId: number) {
    // const response = await sellersRepository.checkSellerById(companyId);
    // if (!response) {
    //     throw { name: "notFound", message: "Company not found"}
    // }
    // else return response;
}


export const usersService = {
    createUser,
    listUsers,
    checkUserId,
    deleteUsers,
}