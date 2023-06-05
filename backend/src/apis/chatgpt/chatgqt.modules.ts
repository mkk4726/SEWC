import { Module } from '@nestjs/common';
import { ChatGPTResolver } from './chatgqt.resolver';
import { ChatGPTService } from './chatgqt.service';

@Module({
  providers: [
    ChatGPTResolver, //
    ChatGPTService,
  ],
  exports: [
    ChatGPTService, //
  ],
})
export class ChatGPTModule {}
