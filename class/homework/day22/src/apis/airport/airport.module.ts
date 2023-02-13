import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportsResolver } from './airport.resolvor';
import { AirportsService } from './airport.service';
import { Airport } from './entities/airport.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Airport, //
    ]),
  ],
  providers: [
    AirportsResolver, //
    AirportsService,
  ],
})
export class AirportsModule {}
