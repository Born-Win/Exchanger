import { Injectable, Inject } from '@nestjs/common';
import { Bank } from '../models';
import { safeToJson } from '../../libs/sequelize/utils';

type BankData = {
  id: number;
  name: string;
  fiat: string;
};

@Injectable()
export class BankRepository {
  constructor(
    @Inject('BANK')
    private bank: typeof Bank
  ) {}

  async findAll(): Promise<BankData[]> {
    const sqlQuery = 'SELECT b.id, b.name, b.img, b.fiat_id, f.symbol as fiat FROM banks as b INNER JOIN fiats as f ON b.fiat_id = f.id';
    const banks = await this.bank.sequelize.query(sqlQuery);
    return safeToJson(banks[0]);
  }
}
