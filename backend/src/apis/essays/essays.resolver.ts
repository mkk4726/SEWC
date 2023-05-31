import { EssaysService } from './essays.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class EssaysResolver {
  constructor(
    private readonly essaysService: EssaysService, //
  ) {}

  @Query(() => String)
  fetchEssay(): string {
    return this.essaysService.read();
  }
}
