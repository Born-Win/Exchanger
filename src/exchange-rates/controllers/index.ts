import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from '../../pipes/joi';
import { ExchangeRateService } from '../services';
import { exchangeRateValidationSchema } from '../validation/schemas';
import {
  ApiTags,
  ApiParam,
  ApiOkResponse,
  ApiBadRequestResponse,
  getSchemaPath,
  ApiExtraModels,
  ApiOperation
} from '@nestjs/swagger';
import {
  HTTP_EXCEPTION_DEFAULT_RESPONSE,
  generateSuccessfulContentObject
} from '../../libs/swagger';
import { ExchangeRateReadDto } from '../dto';

@ApiTags('Exchange-rates')
@ApiExtraModels(ExchangeRateReadDto)
@Controller('rates')
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) {}
  @UsePipes(new JoiValidationPipe(exchangeRateValidationSchema.getRates))
  @Get()
  getRates(@Query() query: { crypto: number; fiat: number }) {
    console.log(query.crypto, query.fiat);
    // const result = this.exchangeRateService.getRates(
    //   query.crypto,
    //   query.fiat,
    //   'current'
    // );

    return {
      rates: '100'
    };
  }
  // @Get()
  // getRates(@Query() query: { crypto: [string]; fiat: [string] }) {
  //   const result = this.exchangeRateService.getRates(
  //     query.crypto,
  //     query.fiat,
  //     'current'
  //   );

  //   return {
  //     rates: result
  //   };
  // }
}
