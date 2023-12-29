import { Module } from '@nestjs/common';
import { ExchangeRate } from './models';
import { ExchangeRateRepository } from './repositories';
import { ExchangeRateService } from './services';
import { ExchangeRateController } from './controllers';
import { KrakenSocketClientProvider } from '../libs/kraken';
import { SettingsService } from '../settings/services';
import { CryptocurrencyModule } from '../cryptocurrencies/cryptocurrency.module';
import { FiatModule } from '../fiats/fiat.module';

@Module({
  imports: [CryptocurrencyModule, FiatModule],
  controllers: [ExchangeRateController],
  providers: [
    {
      provide: 'EXCHANGE_RATE',
      useFactory: () => new ExchangeRate()
    },
    ExchangeRateRepository,
    ExchangeRateService,
    KrakenSocketClientProvider,
    SettingsService
  ],
  exports: [ExchangeRateService]
})
export class ExchangeRateModule {}
