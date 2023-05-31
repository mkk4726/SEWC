import { CreateEssayInput } from './dto/essays-resolver.dto';
import { Essay } from './entities/essay.entity';
import { EssaysService } from './essays.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class EssaysResolver {
  constructor(
    private readonly essaysService: EssaysService, //
  ) {}

  @Query(() => Essay)
  fetchEssay(
    @Args('id') id: number, //
  ): Promise<Essay> {
    return this.essaysService.findOne({ id });
  }

  @Mutation(() => Essay)
  async createEssay(
    @Args('createEssayInput') createEssayInput: CreateEssayInput,
  ): Promise<Essay> {
    return await this.essaysService.create({ createEssayInput });
  }
}
