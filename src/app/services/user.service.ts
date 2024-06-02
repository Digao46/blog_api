import bcrypt from "bcrypt";

import {
  BadRequestException,
  UnprocessableEntityException,
} from "../../infra/common/http/Exception";
import { userRepository } from "../../infra/database/mongo/repositories";

import config from "../../infra/config";

const { salts } = config.bcrypt();

export async function createUser(body: any) {
  const {
    name,
    birth_date,
    email,
    cellphone,
    address,
    password,
    confirmPassword,
  } = body;

  if (
    !name ||
    !birth_date ||
    !email ||
    !cellphone ||
    !address ||
    !password ||
    !confirmPassword
  ) {
    throw new BadRequestException("Algum dado necessário não foi informado!");
  }

  if (password !== confirmPassword) {
    throw new BadRequestException("Senhas devem ser iguais!");
  }

  if (email) {
    const user = await userRepository.getUserByEmail(email);

    if (user) {
      throw new UnprocessableEntityException("Email já cadastrado!");
    }
  }

  if (cellphone) {
    const user = await userRepository.getUserByCellphone(cellphone);

    if (user) {
      throw new UnprocessableEntityException("Telefone já cadastrado!");
    }
  }

  let passwordHash = await bcrypt.hash(password, salts);

  const newUser = {
    name,
    email,
    cellphone,
    address,
    birth_date: new Date(birth_date),
    password: passwordHash,
  };

  return userRepository.createUser(newUser);
}

export async function getUsers(query: any) {
  return userRepository.getUsers(query);
}

export async function editUser(id: string, body: any) {
  if (body.email) {
    const user = await userRepository.getUserByEmail(body.email);

    if (user) {
      throw new UnprocessableEntityException("Email já cadastrado!");
    }
  }

  if (body.cellphone) {
    const user = await userRepository.getUserByCellphone(body.cellphone);

    if (user) {
      throw new UnprocessableEntityException("Telefone já cadastrado!");
    }
  }

  if (body.password && body.confirmPassword) {
    if (body.password !== body.confirmPassword) {
      throw new BadRequestException("Senhas devem ser iguais!");
    }

    body.password = await bcrypt.hash(body.password, salts);

    delete body.confirmPassword
  }

  return userRepository.editUser({ id, content: body });
}

export function deleteUser(id: string) {
  return userRepository.deleteUser(id);
}
