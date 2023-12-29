import { Sequelize } from 'sequelize-typescript';
import config = require('config');
import { Cryptocurrency } from '../../cryptocurrencies/models';
import { Fiat } from '../../fiats/models';
import { Bank } from '../../banks/models';
import { Transaction } from '../../transactions/models';
import { BankBooking } from '../../bank-booking/models';
import { CryptoBooking } from '../../crypto-booking/models';

export const databaseProvider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize(config.get<string>('postgresql.url'));

    await sequelize.authenticate();

    sequelize.addModels([Cryptocurrency, Bank, Fiat, Transaction, CryptoBooking, BankBooking]);

    await sequelize.sync({ alter: true });

    return sequelize;
  }
};
