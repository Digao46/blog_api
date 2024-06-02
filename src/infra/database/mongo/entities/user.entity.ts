import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export class Address {
  @Column({ name: "street" })
  street: string;

  @Column({ name: "number" })
  number: number;

  @Column({ name: "complement" })
  complement?: string;

  @Column({ name: "neighboor" })
  neighboor: string;

  @Column({ name: "city" })
  city: string;

  @Column({ name: "state" })
  state: string;

  @Column({ name: "cep" })
  cep: string;
}

@Entity("users")
export class User {
  @ObjectIdColumn()
  id: string;

  @Column({ name: "name", unique: true })
  name: string;

  @Column({ name: "birth_date" })
  birth_date: Date;

  @Column({ name: "email", unique: true })
  email: string;

  @Column({ name: "cellphone", unique: true })
  cellphone: string;

  @Column({ name: "address" })
  address: Address;

  @Column({ name: "password" })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
