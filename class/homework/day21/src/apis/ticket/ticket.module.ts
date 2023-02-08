import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { TicketsResolver } from './ticket.resolvor';
import { TicketsService } from './ticket.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Ticket, //
    ]),
  ],

  providers: [
    TicketsResolver, //
    TicketsService,
  ],
})
export class TicketModule {}
