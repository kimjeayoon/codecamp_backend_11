import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketsAirlinesResolver } from './airline.resolvor';
import { TicketsAirlinesService } from './airline.service';
import { TicketAirline } from './entities/ticketAriline.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TicketAirline, //
    ]),
  ],
  providers: [
    TicketsAirlinesResolver, //
    TicketsAirlinesService,
  ],
})
export class TicketsAirlinesModule {}
