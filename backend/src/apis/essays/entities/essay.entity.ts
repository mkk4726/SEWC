import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity() // typeorm
@ObjectType() //graphql
export class Essay {
  @PrimaryGeneratedColumn('increment') // typeorm
  @Field(() => Int) // GraphQL
  id: number;

  @Column() // typeorm
  @Field(() => String) // GraphQL , return 타입 정해주는 것. 이거 안쓰면 못받음
  title: string;

  @Column() // typeorm
  @Field(() => String) // GraphQL
  input_text: string;

  @Column() // typeorm
  @Field(() => String) // GraphQL
  output_text: string;

  @Column()
  @Field(() => String, { nullable: true })
  memo: string;

  @Column() // typeorm
  @Field(() => String) // GraphQL
  feedback: string;

  @CreateDateColumn() // typeorm
  @Field(() => Date) // GraphQL
  createdAt: Date;

  @JoinColumn()
  @ManyToOne(() => User)
  @Field(() => User)
  user: User;
}
