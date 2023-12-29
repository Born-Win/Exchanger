import { Body, Controller, ForbiddenException, Get, Post, Query, UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from '../../pipes/joi';
import { TransactionService } from '../services';
import { TransactionCreateDto } from '../dto';
import { transactionValidationSchema } from '../validation/schemas';
import config = require('config');

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(transactionValidationSchema.create))
  async create(@Body() data: TransactionCreateDto) {
    const result = await this.transactionService.create(data);

    return {
      id: result?.id
    };
  }

  @Get()
  @UsePipes(new JoiValidationPipe(transactionValidationSchema.getOne))
  async getOne(@Query() query: { id: string }) {
    const result = await this.transactionService.getOne(query.id);
    return {
      transaction: result
    };
  }

  @Get('/details')
  @UsePipes(new JoiValidationPipe(transactionValidationSchema.geDetails))
  async geDetails(@Query() query: { id: string }) {
    const details = await this.transactionService.getDetails(query.id);
    console.log(details);
    return {
      details
    };
  }

  @Get('/paid')
  @UsePipes(new JoiValidationPipe(transactionValidationSchema.pay))
  async pay(@Query() query: { id: string }) {
    const result = await this.transactionService.pay(+query.id);

    return {
      transaction: result
    };
  }

  @Get('/canceled')
  @UsePipes(new JoiValidationPipe(transactionValidationSchema.cancel))
  async cancel(@Query() query: { id: string }) {
    const result = await this.transactionService.cancel(+query.id);

    return {
      transaction: result
    };
  }
  
  @Get('/completed')
  @UsePipes(new JoiValidationPipe(transactionValidationSchema.complete))
  async complete(@Query() query: { id: string; pass: string }) {
    if (query.pass !== config.get('apiPassword')) {
      return new ForbiddenException('Wrong password');
    }
    const result = await this.transactionService.complete(+query.id);

    return {
      transaction: result.id
    };
  }
}
