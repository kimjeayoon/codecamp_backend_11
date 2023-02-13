import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airport } from './entities/airport.entity';
import { IAirportsServiceCreate } from './interfaces/airports-service.interface';

@Injectable()
export class AirportsService {
  constructor(
    @InjectRepository(Airport)
    private readonly airportsRepository: Repository<Airport>,
  ) {}

  create({ airport_name }: IAirportsServiceCreate): Promise<Airport> {
    return this.airportsRepository.save({ airport_name });
  }
}
