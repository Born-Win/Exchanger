import Joi = require('joi');

type ExchangeRateInput = {
  getRates: {
    query: {
      crypto: string;
      fiat: string;
    };
  };
};

export const exchangeRateValidationSchema = {
  getRates: Joi.object<ExchangeRateInput['getRates']>({
    query: Joi.object({
      crypto: Joi.string().regex(/^[1-9][0-9]*$/),
      fiat: Joi.string().regex(/^[1-9][0-9]*$/)
    }).required()
  })
};
