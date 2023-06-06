import { Args, Query, Resolver } from '@nestjs/graphql';
import { ChatGPTService } from './chatgqt.service';
import { ChatCompletionResponseMessage } from 'openai';

@Resolver()
export class ChatGPTResolver {
  constructor(private readonly chatgptService: ChatGPTService) {}

  @Query(() => String)
  checkEssay(
    @Args('essay')
    essay: string,
  ): Promise<string> {
    return this.chatgptService.checkEssay({ essay });
  }
}
