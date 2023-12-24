import { Injectable } from '@nestjs/common';
import { BankRepository } from '../repositories';

@Injectable()
export class BankService {
  constructor(private readonly bankRepository: BankRepository) {}

  async getAll() {
    const banks = await this.bankRepository.findAll();
    return banks;
  }
}
