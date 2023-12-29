import { Module } from '@nestjs/common';
import { Cryptocurrency } from './models';
import { CryptocurrencyRepository } from './repositories';
import { CryptocurrencyService } from './services';
import { CryptocurrencyController } from './controllers';

@Module({
  controllers: [CryptocurrencyController],
  providers: [
    {
      provide: 'CRYPTOCURRENCY',
      useValue: Cryptocurrency
    },
    CryptocurrencyRepository,
    CryptocurrencyService
  ],
  exports: [CryptocurrencyRepository, CryptocurrencyService]
})
export class CryptocurrencyModule {}
