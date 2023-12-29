import { Injectable, Inject } from '@nestjs/common';
import { BankBooking } from '../models';
import { safeToJson } from '../../libs/sequelize/utils';

type BankBookingReadData = {
  id: number;
  bank_id: number;
  booked_amount: number;
};

@Injectable()
export class BankBookingRepository {
  constructor(
    @Inject('BANKBOOKING')
    private bankBooking: typeof BankBooking
  ) {}

  async findOne(param: { id: number } | { bank_id: number } ): Promise<BankBookingReadData> {
    const bankBooking = await this.bankBooking.findOne({ where: param });
    return safeToJson(bankBooking);
  }

  async updateOne(id: number, booked_amount: number): Promise<BankBookingReadData> {
    const bankBooking = await this.bankBooking.update({ booked_amount }, { where: { id }, returning: true });
    return safeToJson(bankBooking[0])[1];
  }
}
