import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  // @Field(() => String)
  password: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Int)
  age: number;

  @CreateDateColumn() // typeorm
  @Field(() => Date) // GraphQL
  createdAt: Date;
}
