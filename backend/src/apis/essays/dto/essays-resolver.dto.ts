import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEssayInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  input_text: string;

  @Field(() => String)
  output_text: string;

  @Field(() => String)
  memo: string;

  @Field(() => String)
  feedback: string;
}
