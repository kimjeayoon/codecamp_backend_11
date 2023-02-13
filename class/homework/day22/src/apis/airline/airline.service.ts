import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airline } from './entities/ariline.entity';
import { IAirlinesServiceCreate } from './interfaces/airlines-service.interface';

@Injectable()
export class AirlinesService {
  constructor(
    @InjectRepository(Airline)
    private readonly airlinesRepository: Repository<Airline>,
  ) {}

  create({ airline_name }: IAirlinesServiceCreate): Promise<Airline> {
    return this.airlinesRepository.save({ airline_name });
  }
}
