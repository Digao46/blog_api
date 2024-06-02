import { Address } from "../../database/mongo/entities";

export type CreateUserType = {
  name: string;
  birth_date: Date;
  email: string;
  cellphone: string;
  address: Address;
  password: string;
};
