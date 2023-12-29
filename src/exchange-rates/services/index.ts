import { Injectable, BadRequestException } from '@nestjs/common';
import { ExchangeRateRepository } from '../repositories';
import { CRYPTOCURRENCY_MAP } from '../../consts';
import {
  ExchangeRateStoreDto,
  ExchangeRateCreateDto,
} from '../dto';
import { ExchangeRateType } from '../types';
import { CryptocurrencyReadDto } from '../../cryptocurrencies/dto';
import { FiatReadDto } from '../../fiats/dto';
import { SettingsService } from '../../settings/services';

@Injectable()
export class ExchangeRateService {
  private cryptoSettings: CryptocurrencyReadDto[];
  private fiatSettings: FiatReadDto[];

  constructor(
    private readonly exchangeRateRepository: ExchangeRateRepository,
    private readonly settingsService: SettingsService
  ) {}

  init() {
    this.cryptoSettings = this.settingsService.getSettings('crypto');
    this.fiatSettings = this.settingsService.getSettings('fiats');
  }

  savePair(data: ExchangeRateStoreDto) {
    const [crypto, fiat] = this.decodePair(data.pair);
    const currentExchangeRateData = new ExchangeRateCreateDto({
      pair: this.generatePair(crypto, fiat),
      rate: +data.rates.p[0],
      type: 'current'
    });
    const dailyExchangeRateData = new ExchangeRateCreateDto({
      pair: this.generatePair(crypto, fiat),
      rate: +data.rates.p[1],
      type: 'daily'
    });
    this.exchangeRateRepository.addOne(currentExchangeRateData);
    this.exchangeRateRepository.addOne(dailyExchangeRateData);
  }

  getRate(
    cryptoId: number,
    fiatId: number,
    type: ExchangeRateType
  ) {
    const crypto = this.cryptoSettings.find(c => c.id === cryptoId)?.symbol;
    const fiat = this.fiatSettings.find(f => f.id === fiatId)?.symbol;

    if (!crypto) {
      throw new BadRequestException(`There is not cryptocurrency with id = ${cryptoId}`);
    }
    if (!fiat) {
      throw new BadRequestException(`There is not fiat with id = ${fiatId}`);
    }

    const pair = this.generatePair(CRYPTOCURRENCY_MAP[crypto] || crypto, fiat);

    const foundRate = this.exchangeRateRepository.getOneByPair(type, pair);
    return foundRate;
  }

  generatePairs(cryptocurrencies: string[], fiats: string[]) {
    const pairs: string[] = [];

    for (const fiat of fiats) {
      for (const crypto of cryptocurrencies) {
        pairs.push(this.generatePair(crypto, fiat));
      }
    }

    return pairs;
  }

  private decodePair(pair: string) {
    return pair.split('/');
  }

  private generatePair(crypto: string, fiat: string) {
    return `${crypto}/${fiat}`;
  }
}
