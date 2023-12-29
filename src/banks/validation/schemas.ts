import Joi = require('joi');

type BankInput = {
  getOne: {
    query: {
      id: string;
    };
  };
};

export const bankValidationSchema = {
  getOne: Joi.object<BankInput['getOne']>({
    query: Joi.object({
      id: Joi.string().required()
    }).required()
  })
};
