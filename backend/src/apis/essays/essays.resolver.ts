import { CreateEssayInput } from './dto/essays-resolver.dto';
import { EssaysService } from './essays.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class EssaysResolver {
  constructor(
    private readonly essaysService: EssaysService, //
  ) {}

  @Query(() => String)
  fetchEssay(
    @Args('id') id: number, //
  ): string {
    return this.essaysService.fetchEssay({ id });
  }

  @Mutation(() => String)
  createEssay(
    @Args('createEssayInput') createEssayInput: CreateEssayInput,
  ): string {
    return this.essaysService.createEssay({ createEssayInput });
  }
}
