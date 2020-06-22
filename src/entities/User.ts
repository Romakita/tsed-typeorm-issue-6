import {Property} from "@tsed/common";
import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
  @Property()
  @PrimaryGeneratedColumn()
  id: number;

  @Property()
  name: string;
}
