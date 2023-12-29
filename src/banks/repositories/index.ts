import { Injectable, Inject } from '@nestjs/common';
import { Bank } from '../models';
import { safeToJson } from '../../libs/sequelize/utils';

type BankShortData = {
  id: number;
  name: string;
  fiat: string;
  img: string;
  details: string[];
  symbol: string;
  reserve: number;
};

type BankReadData = BankShortData & {
  exchange_details: string;
}

@Injectable()
export class BankRepository {
  constructor(
    @Inject('BANK')
    private bank: typeof Bank
  ) {}

  async findAll(): Promise<BankShortData[]> {
    const sqlQuery = 'SELECT b.id, b.name, b.img, b.fiat_id, b.details, b.reserve, f.symbol as fiat FROM banks as b INNER JOIN fiats as f ON b.fiat_id = f.id';
    const banks = await this.bank.sequelize.query(sqlQuery);
    return safeToJson(banks[0]);
  }

  async findOneById(id: number): Promise<BankReadData> {
    const bank = await this.bank.findByPk(id);
    return safeToJson(bank);
  }
}
