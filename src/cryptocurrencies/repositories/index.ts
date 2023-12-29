import { Injectable, Inject } from '@nestjs/common';
import { Cryptocurrency } from '../models';
import { safeToJson } from '../../libs/sequelize/utils';

type CryptocurrencyData = {
  id: number;
  name: string;
  symbol: string;
  img: string;
  min_exchange: number;
  wallet: string;
};

@Injectable()
export class CryptocurrencyRepository {
  constructor(
    @Inject('CRYPTOCURRENCY')
    private cryptocurrency: typeof Cryptocurrency
  ) {}

  async findAll(): Promise<CryptocurrencyData[]> {
    const cryptocurrencies = await this.cryptocurrency.findAll();
    return safeToJson(cryptocurrencies);
  }

  async findOneById(id: number): Promise<CryptocurrencyData> {
    const cryptocurrency = await this.cryptocurrency.findByPk(id);
    return safeToJson(cryptocurrency);
  }
}
