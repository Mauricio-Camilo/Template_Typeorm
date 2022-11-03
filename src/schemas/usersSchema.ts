import joi from 'joi'; 

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  cpf: joi.string().required().pattern(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/),
});

export default userSchema;