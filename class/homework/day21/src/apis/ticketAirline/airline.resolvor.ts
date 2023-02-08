import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TicketsAirlinesService } from './airline.service';
import { TicketAirline } from './entities/ticketAriline.entity';

@Resolver()
export class TicketsAirlinesResolver {
  constructor(
    private readonly ticketsArilinesService: TicketsAirlinesService, //
  ) {}

  @Mutation(() => TicketAirline)
  createTicketAirline(
    @Args('airport_name') airport_name: string,
  ): Promise<TicketAirline> {
    return this.ticketsArilinesService.create({ airport_name });
  }
}
