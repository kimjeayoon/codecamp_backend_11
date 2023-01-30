import { Module } from '@nestjs/common';
import { StarbucksResolver } from './starbucks.resolver';
import { StarbucksService } from './starbucks.service';

@Module({
  imports: [],
  providers: [
    StarbucksService, //
    StarbucksResolver,
  ],
})
export class StarbucksModule {}
