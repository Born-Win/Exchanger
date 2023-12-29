import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { SettingsService } from '../settings/services';
import { KrakenSocketClientProvider } from '../libs/kraken';
import { ExchangeRateService } from '../exchange-rates/services';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

export class App {
  private static app: NestFastifyApplication;

  static async createApp() {
    if (App.app) {
      return App.app;
    }

    App.app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    );

    App.app.enableCors();
    
    const settingsService = App.app.get<SettingsService>(SettingsService);
    await settingsService.load();

    const krakenService = App.app.get<KrakenSocketClientProvider>(KrakenSocketClientProvider);
    krakenService.init();
    
    const exchangeRateService = App.app.get<ExchangeRateService>(ExchangeRateService);
    exchangeRateService.init();

    const config = new DocumentBuilder()
      .setTitle('Crypto-exchanger API documentation')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(App.app, config);
    SwaggerModule.setup('api', App.app, document);

    return App.app;
  }
}
