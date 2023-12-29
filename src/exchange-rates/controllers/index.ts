import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from '../../pipes/joi';
import { ExchangeRateService } from '../services';
import { exchangeRateValidationSchema } from '../validation/schemas';
import {
  ApiTags,
  ApiExtraModels
} from '@nestjs/swagger';
import { ExchangeRateReadDto } from '../dto';

@ApiTags('Exchange-rates')
@ApiExtraModels(ExchangeRateReadDto)
@Controller('rates')
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) {}
  @UsePipes(new JoiValidationPipe(exchangeRateValidationSchema.getRates))
  @Get()
  getRate(@Query() query: { crypto: string; fiat: string }) {
    const result = this.exchangeRateService.getRate(
      +query.crypto,
      +query.fiat,
      'current'
    );
    return {
      rate: result?.rate || null
    };
  }
}
