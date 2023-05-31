import { Module } from '@nestjs/common';
import { EssaysResolver } from './essays.resolver';
import { EssaysService } from './essays.service';

@Module({
  imports: [],
  providers: [
    EssaysResolver, //
    EssaysService,
  ],
})
export class EssaysModule {}
