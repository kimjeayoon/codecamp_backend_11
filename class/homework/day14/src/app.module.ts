import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardsModule } from './apis/boards/boards.module';
import { StarbucksModule } from './apis/starbucks/starbucks.module';

@Module({
  imports: [
    BoardsModule,
    StarbucksModule,
    // productsModule,
    //UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/grqphql/schema/gql',
    }),
  ],
})
export class AppModule {}
