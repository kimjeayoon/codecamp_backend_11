import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TicketAirline } from './entities/ticketAriline.entity';
import { ITicketsAirlinesServiceCreate } from './interfaces/tickets-airlines-service.interface';

@Injectable()
export class TicketsAirlinesService {
  constructor(
    @InjectRepository(TicketAirline)
    private readonly ticketAirlinesRepository: Repository<TicketAirline>,
  ) {}

  create({
    airport_name,
  }: ITicketsAirlinesServiceCreate): Promise<TicketAirline> {
    return this.ticketAirlinesRepository.save({ airport_name });
  }
}
