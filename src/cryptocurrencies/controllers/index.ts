import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { CryptocurrencyService } from '../services';
import { JoiValidationPipe } from '../../pipes/joi';
import { cryptocurrencyValidationSchema } from '../validation/schemas';

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
  
  @Get('/one')
  @UsePipes(new JoiValidationPipe(cryptocurrencyValidationSchema.getOne))
  async getOne(@Query() query: { id: string }) {
    const result = await this.cryptocurrencyService.getOne(+query.id)

    return {
      crypto: result
    };
  }
}
