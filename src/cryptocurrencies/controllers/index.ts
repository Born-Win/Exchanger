import { Controller, Get } from '@nestjs/common';
import { CryptocurrencyService } from '../services';

@Controller('crypto')
export class CryptocurrencyController {
  constructor(private readonly cryptocurrencyService: CryptocurrencyService) {}

  @Get()
  async getAll() {
    const result = await this.cryptocurrencyService.getAll();

    return {
      crypto: result
    };
  }
}
