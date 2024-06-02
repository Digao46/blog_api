import MongoDataSource from "..";
import { CreateUserType, EditUserType } from "../../../common/types";
import { User } from "../entities";

const ormRepository = MongoDataSource.getMongoRepository(User);

export async function createUser({
  name,
  birth_date,
  email,
  cellphone,
  address,
  password,
}: CreateUserType) {
  return ormRepository.save({
    name,
    birth_date,
    email,
    cellphone,
    address,
    password,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

export async function getUsers(query: any) {
  return ormRepository.find();
}

export async function editUser({ id, content }: EditUserType) {
  return ormRepository.update(id, { ...content, updatedAt: new Date() });
}

export async function deleteUser(id: string) {
  return ormRepository.delete(id);
}

export async function getUserByEmail(email: any) {
  return ormRepository.findOne({ where: { email } });
}

export async function getUserByCellphone(cellphone: any) {
  return ormRepository.findOne({ where: { cellphone } });
}
