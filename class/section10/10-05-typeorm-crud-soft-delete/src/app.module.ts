import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './apis/boards/boards.module';
import { Board } from './apis/boards/entities/board.entity';
import { ConfigModule } from '@nestjs/config';
import { dirname } from 'path';
import { ProductsModule } from './apis/products/products.module';

@Module({
  imports: [
    BoardsModule,
    ProductsModule,
    //UserModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/grqphql/schema/gql',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql', // as는 강제해주는 명령어
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'], //*표시는 모든폴더및 파일을 본다는의미이다
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
