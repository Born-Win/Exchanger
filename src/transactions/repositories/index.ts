import { Injectable, Inject } from '@nestjs/common';
import { Transaction } from '../models';
import { safeToJson } from '../../libs/sequelize/utils';

type TransactionCreateData = {
  bank_id: number;
  crypto_id: number;
  user_id: string;
  rate: number;
  crypto_amount: number;
  fiat_amount: number;
  details: string;
  wallet?: string;
  status: string;
  crypto_to_bank?: boolean;
  bank_to_crypto?: boolean; 
};

type TransactionReadData = {
  id: number;
  bank_id: number;
  crypto_id: number;
  user_id: string;
  rate: number;
  crypto_amount: number;
  fiat_amount: number;
  details: string;
  wallet?: string;
  status: string;
  crypto_to_bank: boolean;
  bank_to_crypto: boolean; 
};

@Injectable()
export class TransactionRepository {
  constructor(
    @Inject('TRANSACTION')
    private transaction: typeof Transaction
  ) {}

  async createOne(transactionData: TransactionCreateData) {
    const result = await this.transaction.create(transactionData);
    return safeToJson(result);
  }

  async getOne(id: string): Promise<TransactionReadData> {
    const result = await this.transaction.findOne({ where: { id } });
    return safeToJson(result);
  }

  async updateOne(id: number, data: Partial<TransactionCreateData>) {
    const result = await this.transaction.update(data, { where: { id }, returning: true });
    return safeToJson(result[1])[0];
  }
}
