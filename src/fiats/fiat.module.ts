import { Module } from '@nestjs/common';
import { Fiat } from './models';
import { FiatRepository } from './repositories';

@Module({
  providers: [
    {
      provide: 'FIAT',
      useValue: Fiat
    },
    FiatRepository,
  ],
  exports: [FiatRepository]
})
export class FiatModule {}
