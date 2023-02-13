import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AirportsService } from './airport.service';
import { Airport } from './entities/airport.entity';

@Resolver()
export class AirportsResolver {
  constructor(
    private readonly ariPortsService: AirportsService, //
  ) {}

  @Mutation(() => Airport)
  createTicketAirport(
    @Args('airport_name') airport_name: string,
  ): Promise<Airport> {
    return this.ariPortsService.create({ airport_name });
  }
}
