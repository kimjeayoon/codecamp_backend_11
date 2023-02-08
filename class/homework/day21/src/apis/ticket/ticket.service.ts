import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Ticket } from './entities/ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ITicketsServiceCheckSoldout,
  ITicketsServiceCreate,
  ITicketsServiceDelete,
  ITicketsServiceFindOne,
  ITicketsServiceUpdate,
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

  findOne({ ticketId }: ITicketsServiceFindOne): Promise<Ticket> {
    return this.ticketRepository.findOne({ where: { ticket_id: ticketId } });
  }

  create({ createTicketInput }: ITicketsServiceCreate): Promise<Ticket> {
    const result = this.ticketRepository.save({
      ...createTicketInput,
    });

    return result;
  }

  async update({
    ticketId,
    updateTicketInput,
  }: ITicketsServiceUpdate): Promise<Ticket> {
    this.findOne({ ticketId });

    const ticket = await this.findOne({ ticketId });

    this.checkSoldout({ ticket });

    const result = this.ticketRepository.save({
      ...ticket,
      ...updateTicketInput,
    });
    return result;
  }

  checkSoldout({ ticket }: ITicketsServiceCheckSoldout): void {
    if (ticket.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 티켓입니다.');
    }
  }

  async delete({ ticketId }: ITicketsServiceDelete): Promise<boolean> {
    const result = await this.ticketRepository.softDelete({
      ticket_id: ticketId,
    });
    return result.affected ? true : false;
  }
}
