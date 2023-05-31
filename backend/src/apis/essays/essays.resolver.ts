import { CreateEssayInput } from './dto/essays-resolver.dto';
import { Essay } from './entities/essay.entity';
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

  @Mutation(() => Essay)
  async createEssay(
    @Args('createEssayInput') createEssayInput: CreateEssayInput,
  ): Promise<Essay> {
    return await this.essaysService.createEssay({ createEssayInput });
  }
}
