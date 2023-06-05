import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EssaysModule } from './apis/essays/essays.modules';
import { UsersModule } from './apis/users/users.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Essay } from './apis/essays/entities/essay.entity';
import { User } from './apis/users/entities/user.entity';
import { AuthModule } from './apis/auth/auth.modules';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    // .env파일 세팅
    ConfigModule.forRoot(),
    EssaysModule,
    UsersModule,
    // code-first 방식의 nestjs-graphql 셋팅
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }), // req는 기본적으로 들어오지만, res는 이걸 설정해줘야 들어옴
    }),
    // typeorm setting
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD, // 비밀번호
      database: process.env.MYSQL_DATABASE, //연결할 데이터베이스 이름
      entities: [Essay, User], // 연결할 entity
      synchronize: false, // entity테이블을 데이터베이스와 동기화할 것인지
      logging: true, // 콘솔창에 log를 표시할 것인지
    }),
  ],
  providers: [],
})
export class AppModule {}
