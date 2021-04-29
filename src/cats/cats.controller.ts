import { Controller, Get, Post } from '@nestjs/common';
import { Cat } from './cats.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post('add')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('get')
  async findAllCats(): Promise<Cat[]> {
    return this.catsService.findAllCats();
  }
}
