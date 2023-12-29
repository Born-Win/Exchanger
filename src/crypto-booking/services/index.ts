import { Injectable } from '@nestjs/common';
import { CryptoBookingRepository } from '../repositories';
import { CryptoBookingFindDto } from '../dto';

@Injectable()
export class CryptoBookingService {
  constructor(
    private readonly cryptoBookingRepository: CryptoBookingRepository
  ) {}

  getOne(param: CryptoBookingFindDto) {
    return this.cryptoBookingRepository.findOne(param);
  }

  updateOne(id: number, booked_amount: number) {
    return this.cryptoBookingRepository.updateOne(id, booked_amount);
  }
}
