import { Injectable, Scope } from '@nestjs/common';
import { Starbuck } from './entities/starbuck.entity';
import { IStarbucksServiceCreate } from './interfaces/starbucks-service.interface';

@Injectable({ scope: Scope.DEFAULT })
export class StarbucksService {
  coffee(): Starbuck[] {
    const result = [
      {
        number: 1,
        menu: '아메리카노',
        price: 100,
        kcal: 10,
        saturated_fat: 10,
        protein: 10,
        salt: 10,
        sugar: 10,
        caffeine: 10,
      },
      {
        number: 2,
        menu: '에스프레소',
        price: 70,
        kcal: 7,
        saturated_fat: 10,
        protein: 10,
        salt: 10,
        sugar: 10,
        caffeine: 10,
      },
      {
        number: 3,
        menu: '카페라떼',
        price: 150,
        kcal: 15,
        saturated_fat: 10,
        protein: 10,
        salt: 10,
        sugar: 10,
        caffeine: 10,
      },
      {
        number: 4,
        menu: '카푸치노',
        price: 250,
        kcal: 25,
        saturated_fat: 10,
        protein: 10,
        salt: 10,
        sugar: 10,
        caffeine: 10,
      },
      {
        number: 5,
        menu: '카페모카',
        price: 370,
        kcal: 40,
        saturated_fat: 10,
        protein: 10,
        salt: 10,
        sugar: 10,
        caffeine: 10,
      },
    ];

    return result;
  }

  create({ createStarbuckInput }: IStarbucksServiceCreate): string {
    // console.log(createStarbuckInput.menu);
    // console.log(createStarbuckInput.price);
    // console.log(createStarbuckInput.kcal);
    // console.log(createStarbuckInput.saturated_fat);
    // console.log(createStarbuckInput.protein);
    // console.log(createStarbuckInput.salt);
    // console.log(createStarbuckInput.sugar);
    // console.log(createStarbuckInput.caffeine);

    console.log({ createStarbuckInput });

    return '게시물 등록에 성공하였습니다.';
  }
}
