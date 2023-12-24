import config = require('config');
import path = require('path');
import fs = require('fs');
import { Injectable } from '@nestjs/common';
import { CryptocurrencyRepository } from '../../cryptocurrencies/repositories';
import { FiatRepository } from '../../fiats/repositories';

@Injectable()
export class SettingsService {
  constructor(
    private readonly cryptocurrencyRepository: CryptocurrencyRepository,
    private readonly fiatRepository: FiatRepository
  ) {}

  async load() {
    const cryptoPr = this.cryptocurrencyRepository.findAll().then(d => ({ data: d, key: 'crypto' }));
    const fiatPr = this.fiatRepository.findAll().then(d => ({ data: d, key: 'fiat' }));
    
    const results = await Promise.all([cryptoPr, fiatPr]);

    const storagePath = path.join(__dirname, '../../../../', config.get<string>('storageFolder'));

    for (const obj of results) {
      const filePath = path.join(storagePath, `${obj.key}.json`);
      fs.writeFile(filePath, JSON.stringify(obj.data), (err) => {});
    }
  }
}
