import { Injectable } from '@nestjs/common';
import { BankBookingRepository } from '../repositories';
import { BankBookingFindDto } from '../dto';

@Injectable()
export class BankBookingService {
  constructor(
    private readonly bankBookingRepository: BankBookingRepository
  ) {}

  getOne(param: BankBookingFindDto) {
    return this.bankBookingRepository.findOne(param);
  }

  updateOne(id: number, booked_amount: number) {
    return this.bankBookingRepository.updateOne(id, booked_amount);
  }
}
