import Joi = require('joi');

type TransactionInput = {
  create: {
    body: {
      user_id: string;
      bank_id: number;
      crypto_id: number;
      details: Record<string, string>;
      rate: number;
      crypto_amount: number;
      fiat_amount: number;
      crypto_to_bank?: boolean;
      bank_to_crypto?: boolean;
    };
  };
  getOne: {
    query: {
      id: string;
    };
  };
  geDetails: {
    query: {
      id: string;
    };
  };
  pay: {
    query: {
      id: string;
    };
  };
  cancel: {
    query: {
      id: string;
    };
  };
  complete: {
    query: {
      id: string;
      pass: string;
    };
  };
};


const createTransactionCryptoToBankValidationSchema = Joi.object<TransactionInput['create']['body']>({
  user_id: Joi.string().required(),
  bank_id: Joi.number().integer().required(),
  crypto_id: Joi.number().integer().required(),
  details: Joi.object().pattern(Joi.string(), Joi.string()).keys().min(1).required(),
  rate: Joi.number().positive().required(),
  crypto_amount: Joi.number().positive().required(),
  fiat_amount: Joi.number().positive().required(),
  crypto_to_bank: Joi.valid(true).required()
});

const createTransactionBankToCryptoValidationSchema = Joi.object<TransactionInput['create']['body']>({
  user_id: Joi.string().required(),
  bank_id: Joi.number().integer().required(),
  crypto_id: Joi.number().integer().required(),
  details: Joi.object().pattern(Joi.string(), Joi.string()).keys().min(1).required(),
  rate: Joi.number().positive().required(),
  crypto_amount: Joi.number().positive().required(),
  fiat_amount: Joi.number().positive().required(),
  bank_to_crypto: Joi.valid(true).required()
})

export const transactionValidationSchema = {
  create: Joi.object<TransactionInput['create']>({
    body: Joi.alternatives(
      createTransactionBankToCryptoValidationSchema,
      createTransactionCryptoToBankValidationSchema
    ).required()
  }),
  getOne: Joi.object<TransactionInput['getOne']>({
    query: Joi.object({
      id: Joi.string().required()
    }).required()
  }),
  geDetails: Joi.object<TransactionInput['geDetails']>({
    query: Joi.object({
      id: Joi.string().required()
    }).required()
  }),
  pay: Joi.object<TransactionInput['pay']>({
    query: Joi.object({
      id: Joi.string().required()
    }).required()
  }),
  cancel: Joi.object<TransactionInput['cancel']>({
    query: Joi.object({
      id: Joi.string().required()
    }).required()
  }),
  complete: Joi.object<TransactionInput['complete']>({
    query: Joi.object({
      id: Joi.string().required(),
      pass: Joi.string().required()
    }).required()
  })
};
