import { CreateUserType } from "./CreateUserType";

export type EditUserType = {
  id: string;
  content: Partial<CreateUserType>;
};
