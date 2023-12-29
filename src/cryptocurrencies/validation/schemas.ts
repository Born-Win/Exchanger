import Joi = require('joi');

type CryptocurrencyInput = {
  getOne: {
    query: {
      id: string;
    };
  };
};

export const cryptocurrencyValidationSchema = {
  getOne: Joi.object<CryptocurrencyInput['getOne']>({
    query: Joi.object({
      id: Joi.string().required()
    }).required()
  })
};
