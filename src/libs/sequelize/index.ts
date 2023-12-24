import { Sequelize } from 'sequelize-typescript';
import config = require('config');
import { Cryptocurrency } from '../../cryptocurrencies/models';
import { Fiat } from '../../fiats/models';
import { Bank } from '../../banks/models';

export const databaseProvider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize(config.get<string>('postgresql.url'));

    await sequelize.authenticate();

    sequelize.addModels([Cryptocurrency, Bank, Fiat]);

    await sequelize.sync({ alter: true });

    return sequelize;
  }
};
