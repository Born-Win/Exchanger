import { Injectable, BadRequestException } from '@nestjs/common';
import { TransactionRepository } from '../repositories';
import { TransactionCreateDto } from '../dto';
import { STATUSES } from '../consts';
import { BankService } from '../../banks/services';
import { CryptocurrencyService } from '../../cryptocurrencies/services';

@Injectable()
export class TransactionService {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly bankService: BankService,
    private readonly cryptocurrencyService: CryptocurrencyService,
  ) {}

  create(transaction: TransactionCreateDto) {
    const details = JSON.stringify(transaction.details);
    return this.transactionRepository.createOne({
      ...transaction,
      details,
      status: STATUSES.payment_expected
    });
  }

  getOne(id: string) {
    return this.transactionRepository.getOne(id);
  }

  async getDetails(id: string) {
    const transaction = await this.transactionRepository.getOne(id);
    if (transaction.crypto_to_bank) {
      const { wallet } = await this.cryptocurrencyService.getOne(transaction.crypto_id);
      return wallet;
    }
    
    const { exchange_details } = await this.bankService.getOne(transaction.bank_id);
    return exchange_details;
  }

  pay(id: number) {
    const dataToUpdate = {
      status: STATUSES.in_process
    }
    return this.transactionRepository.updateOne(id, dataToUpdate);
  }

  cancel(id: number) {
    const dataToUpdate = {
      status: STATUSES.canceled
    }
    return this.transactionRepository.updateOne(id, dataToUpdate);
  }

  complete(id: number) {
    const dataToUpdate = {
      status: STATUSES.completed
    }
    return this.transactionRepository.updateOne(id, dataToUpdate);
  }
}
