import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Ticket } from './ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interfaces/tickets-service.interface';

@Injectable({})
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>, //
  ) {}

  findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }

  findOne({ ticketId }: IProductsServiceFindOne): Promise<Ticket> {
    return this.ticketRepository.findOne({ where: { id: ticketId } });
  }

  create({ createTicketInput }: IProductsServiceCreate): Promise<Ticket> {
    const result = this.ticketRepository.save({
      ...createTicketInput,
    });

    return result;
  }

  async update({
    ticketId,
    updateTicketInput,
  }: IProductsServiceUpdate): Promise<Ticket> {
    this.findOne({ ticketId });

    const ticket = await this.findOne({ ticketId });

    this.checkSoldout({ ticket });

    const result = this.ticketRepository.save({
      ...ticket,
      ...updateTicketInput,
    });
    return result;
  }

  checkSoldout({ ticket }: IProductsServiceCheckSoldout): void {
    if (ticket.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 티켓입니다.');
    }
  }
}
