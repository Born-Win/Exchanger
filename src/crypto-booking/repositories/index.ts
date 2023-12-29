import { Injectable, Inject } from '@nestjs/common';
import { CryptoBooking } from '../models';
import { safeToJson } from '../../libs/sequelize/utils';

type CryptoBookingReadData = {
  id: number;
  crypto_id: number;
  booked_amount: number;
};

@Injectable()
export class CryptoBookingRepository {
  constructor(
    @Inject('CRYPTOBOOKING')
    private cryptoBooking: typeof CryptoBooking
  ) {}

  async findOne(param: { id: number } | { crypto_id: number } ): Promise<CryptoBookingReadData> {
    const cryptoBooking = await this.cryptoBooking.findOne({ where: param });
    return safeToJson(cryptoBooking);
  }

  async updateOne(id: number, booked_amount: number): Promise<CryptoBookingReadData> {
    const cryptoBooking = await this.cryptoBooking.update({ booked_amount }, { where: { id }, returning: true });
    return safeToJson(cryptoBooking[0])[1];
  }
}
