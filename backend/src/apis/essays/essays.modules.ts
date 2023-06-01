import { Module } from '@nestjs/common';
import { EssaysResolver } from './essays.resolver';
import { EssaysService } from './essays.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Essay } from './entities/essay.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Essay, //
      User,
    ]),
  ],
  providers: [
    EssaysResolver, //
    EssaysService,
  ],
})
export class EssaysModule {}
