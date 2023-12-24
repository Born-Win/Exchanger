import { Controller, Get } from '@nestjs/common';
import { BankService } from '../services';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  async getAll() {
    const result = await this.bankService.getAll();

    return {
      banks: result
    };
  }
}
