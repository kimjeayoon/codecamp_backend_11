import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirlinesResolver } from './airline.resolvor';
import { AirlinesService } from './airline.service';
import { Airline } from './entities/ariline.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Airline, //
    ]),
  ],
  providers: [
    AirlinesResolver, //
    AirlinesService,
  ],
})
export class AirlinesModule {}
