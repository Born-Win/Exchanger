import { Module } from '@nestjs/common';
import { CryptocurrencyModule } from '../cryptocurrencies/cryptocurrency.module';
import { FiatModule } from '../fiats/fiat.module';
import { SettingsService } from './services';


@Module({
  imports: [
    CryptocurrencyModule,
    FiatModule,
  ],
  providers: [SettingsService]
})
export class SettingsModule {}
