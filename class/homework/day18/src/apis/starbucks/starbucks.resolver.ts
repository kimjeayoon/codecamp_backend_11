import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
import { CreateStarbuckInput } from './dto/create-starbuck.input';
import { Starbuck } from './entities/starbuck.entity';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbuck], { nullable: true })
  fetchStarbucks(): Starbuck[] {
    return this.starbucksService.coffee();
  }

  @Mutation(() => String)
  createStarbuck(
    @Args('createStarInput') createStarbuckInput: CreateStarbuckInput,
  ): string {
    return this.starbucksService.create({ createStarbuckInput });
  }
}
