import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Cat } from './cats.interface';

@Injectable()
export class CatsService {
  create(cat: Cat) {
    // this.cats.push(cat);
  }

  async findAllCats() {
    const { data } = await axios.get(
      'https://api.thecatapi.com/v1/categories',
      {
        params: {
          limit: 2,
          page: 1,
        },
      },
    );
    return data;
  }
}
