import config = require('config');
import path = require('path');
import fs = require('fs');
import { Injectable } from '@nestjs/common';
import { CryptocurrencyRepository } from '../../cryptocurrencies/repositories';
import { FiatRepository } from '../../fiats/repositories';
import { CryptocurrencyReadDto } from '../../cryptocurrencies/dto';
import { FiatReadDto } from '../../fiats/dto';
import { ExchangeUnitType } from '../../types';

@Injectable()
export class SettingsService {
  readonly settings: { crypto: CryptocurrencyReadDto[], fiats: FiatReadDto[] };
  readonly date: string;
  
  constructor(
    private readonly cryptocurrencyRepository: CryptocurrencyRepository,
    private readonly fiatRepository: FiatRepository
  ) {
    this.settings = {
      crypto: [],
      fiats: []
    }
    this.date = Math.random() * 1000 - 230 + '';
  }

  async load() {
    const cryptoPr = this.cryptocurrencyRepository.findAll().then(d => ({ data: d, key: 'crypto' }));
    const fiatPr = this.fiatRepository.findAll().then(d => ({ data: d, key: 'fiats' }));
    
    const results = await Promise.all([cryptoPr, fiatPr]);

    const storagePath = path.join(__dirname, '../../../../', config.get<string>('storageFolder'));

    for (const obj of results) {
      if (!fs.existsSync(storagePath)) {
        fs.mkdirSync(storagePath);
      }
      const filePath = path.join(storagePath, `${obj.key}.json`);
      fs.writeFileSync(filePath, JSON.stringify(obj.data));

      this.settings[obj.key] = obj.data;
    }
  }

  getSettings(key: ExchangeUnitType) {
    return this.settings[key];
  }
}
