import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { SettingsService } from '../settings/services';
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
    // App.app.setGlobalPrefix('v1');

    App.app.enableCors();
    
    const settingsService = App.app.get<SettingsService>(SettingsService);
    await settingsService.load();


    const config = new DocumentBuilder()
      .setTitle('Crypto-exchanger API documentation')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(App.app, config);
    SwaggerModule.setup('api', App.app, document);

    return App.app;
  }
}
