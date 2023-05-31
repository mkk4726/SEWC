import { Module } from '@nestjs/common';
import { EssaysResolver } from './essays.resolver';
import { EssaysService } from './essays.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Essay } from './entities/essay.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Essay, //
    ]),
  ],
  providers: [
    EssaysResolver, //
    EssaysService,
  ],
})
export class EssaysModule {}
