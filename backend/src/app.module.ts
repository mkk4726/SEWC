import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EssaysModule } from './apis/essays/essays.modules';
import { UsersModule } from './apis/users/users.modules';

@Module({
  imports: [
    EssaysModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
  ],
  providers: [],
})
export class AppModule {}
