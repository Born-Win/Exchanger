import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GlobalModule } from './global.module';
import { CryptocurrencyModule } from '../cryptocurrencies/cryptocurrency.module';
import { BankModule } from '../banks/bank.module';
import { ExchangeRateModule } from '../exchange-rates/exchange-rate.module';
import { SettingsModule } from '../settings/settings.module';
import { StaticFilesController } from '../static';
import * as ExceptionFilters from '../exception-filters';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    GlobalModule,
    CryptocurrencyModule,
    BankModule,
    ExchangeRateModule,
    SettingsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../public'),
      serveRoot: '/',
      serveStaticOptions: {
        index: 'index.html', // Specify the default file to serve when accessing the root URL
      },
    }),
  ],
  providers: [
    ...Object.values(ExceptionFilters).map(filter => ({
      provide: APP_FILTER,
      useClass: filter
    }))
  ],
  controllers: [StaticFilesController]
})
export class AppModule {}
