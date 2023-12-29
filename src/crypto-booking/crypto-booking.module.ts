import { Module } from '@nestjs/common';
import { CryptoBooking } from './models';
import { CryptoBookingRepository } from './repositories';
import { CryptoBookingService } from './services';

@Module({
  providers: [
    {
      provide: 'CRYPTOBOOKING',
      useValue: CryptoBooking
    },
    CryptoBookingRepository,
    CryptoBookingService
  ],
  exports: [CryptoBookingService]
})
export class CryptoBookingModule {}
