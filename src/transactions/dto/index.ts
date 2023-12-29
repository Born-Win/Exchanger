export class TransactionCreateDto {
    bank_id: number;
    crypto_id: number;
    user_id: string;
    details: Record<string, string>;
    rate: number;
    crypto_amount: number;
    fiat_amount: number;
    crypto_to_bank?: boolean;
    bank_to_crypto?: boolean; 

    constructor (data: Record<string, any>) {
        this.bank_id = data.bank_id;
        this.crypto_id = data.crypto_id;
        this.user_id = data.user_id;
        this.details = data.details;
        this.rate = data.rate;
        this.crypto_amount = data.crypto_amount;
        this.fiat_amount = data.fiat_amount;
        this.crypto_to_bank = data.crypto_to_bank;
        this.bank_to_crypto = data.bank_to_crypto;
    }
}