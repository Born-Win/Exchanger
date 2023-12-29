import { Module } from '@nestjs/common';
import { BankBooking } from './models';
import { BankBookingRepository } from './repositories';
import { BankBookingService } from './services';

@Module({
  providers: [
    {
      provide: 'BANKBOOKING',
      useValue: BankBooking
    },
    BankBookingRepository,
    BankBookingService
  ],
  exports: [BankBookingService]
})
export class CryptoBookingModule {}
