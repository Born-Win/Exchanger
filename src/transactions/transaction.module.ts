import { Module } from '@nestjs/common';
import { Transaction } from './models';
import { TransactionRepository } from './repositories';
import { TransactionService } from './services';
import { TransactionController } from './controllers';
import { BankModule } from '../banks/bank.module';
import { CryptocurrencyModule } from '../cryptocurrencies/cryptocurrency.module';
import { CryptoBookingModule } from '../crypto-booking/crypto-booking.module';

@Module({
  imports: [BankModule, CryptocurrencyModule, CryptoBookingModule],
  controllers: [TransactionController],
  providers: [
    {
      provide: 'TRANSACTION',
      useValue: Transaction
    },
    TransactionRepository,
    TransactionService
  ],
  exports: [TransactionRepository]
})
export class TransactionModule {}
