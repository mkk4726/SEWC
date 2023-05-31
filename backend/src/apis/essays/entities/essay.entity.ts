import { Field, Int } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Essay {
  @PrimaryGeneratedColumn('increment') // typeorm
  @Field(() => Int) // GraphQL
  id: number;

  @Column() // typeorm
  @Field(() => String) // GraphQL
  title: string;

  @Column() // typeorm
  @Field(() => String) // GraphQL
  input_text: string;

  @Column() // typeorm
  @Field(() => String) // GraphQL
  output_text: string;

  @Column()
  @Field(() => String)
  memo: string;

  @Column() // typeorm
  @Field(() => String) // GraphQL
  feedback: string;

  @CreateDateColumn() // typeorm
  @Field(() => Date) // GraphQL
  createdAt: Date;

  @JoinColumn()
  @ManyToOne(() => User)
  user: User;
}
