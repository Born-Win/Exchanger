import { Module } from '@nestjs/common';
import { Bank } from './models';
import { BankRepository } from './repositories';
import { BankService } from './services';
import { BankController } from './controllers';

@Module({
  controllers: [BankController],
  providers: [
    {
      provide: 'BANK',
      useValue: Bank
    },
    BankRepository,
    BankService
  ],
})
export class BankModule {}
