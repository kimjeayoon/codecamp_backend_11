import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Ticket } from './entities/ticket.entity';
import { TicketsService } from './ticket.service';
import { CreateTicketInput } from './dto/create-ticket.input';
import { UpdateTicketInput } from './dto/update-ticket.input';

@Resolver()
export class TicketsResolver {
  constructor(
    private readonly ticketsService: TicketsService, //
  ) {}

  @Query(() => [Ticket])
  fetchTickets(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Query(() => Ticket)
  fetchTicket(
    @Args('ticketId') ticketId: string, //
  ): Promise<Ticket> {
    return this.ticketsService.findOne({ ticketId });
  }

  @Mutation(() => Ticket)
  createTicket(
    @Args('createTicketInput') createTicketInput: CreateTicketInput,
  ): Promise<Ticket> {
    return this.ticketsService.create({ createTicketInput });
  }

  @Mutation(() => Ticket)
  updateTicket(
    @Args('ticketId') ticketId: string,
    @Args('updateticketInput') updateTicketInput: UpdateTicketInput,
  ): Promise<Ticket> {
    return this.ticketsService.update({ ticketId, updateTicketInput });
  }
}
