import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { BankService } from '../services';
import { JoiValidationPipe } from '../../pipes/joi';
import { bankValidationSchema } from '../validation/schemas';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  async getAll() {
    const result = await this.bankService.getAll()

    return {
      banks: result
    };
  }

  @Get('/one')
  @UsePipes(new JoiValidationPipe(bankValidationSchema.getOne))
  async getOne(@Query() query: { id: string }) {
    const result = await this.bankService.getOne(+query.id)

    return {
      bank: result
    };
  }
}
