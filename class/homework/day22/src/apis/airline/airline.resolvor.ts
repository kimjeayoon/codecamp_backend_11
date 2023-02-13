import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AirlinesService } from './airline.service';
import { Airline } from './entities/ariline.entity';

@Resolver()
export class AirlinesResolver {
  constructor(
    private readonly ticketsAirlinesService: AirlinesService, //
  ) {}

  @Mutation(() => Airline)
  createTicketAirline(
    @Args('airport_name') airline_name: string,
  ): Promise<Airline> {
    return this.ticketsAirlinesService.create({ airline_name });
  }
}
