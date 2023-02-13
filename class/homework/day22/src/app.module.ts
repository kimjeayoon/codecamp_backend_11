import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TicketModule } from './apis/ticket/ticket.module';
import { UsersModule } from './apis/users/users.module';
import { AuthModule } from './apis/auth/auth.module';
import { AirlinesModule } from './apis/airline/airline.module';
import { AirportsModule } from './apis/airport/airport.module';

@Module({
  imports: [
    AuthModule,
    AirlinesModule,
    AirportsModule,
    TicketModule,
    UsersModule,
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
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
