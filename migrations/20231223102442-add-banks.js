const tableName = 'banks';

const banksData = [
  { 
    id: 1,
    name: 'Wise',
    fiat_id: 1,
    img: 'https://kingex.io/storage/payment_systems/iex-dBEnOzAwvw.png',
    details: [
      'Enter your e-mail',
      'Wise Email (enabled to receive payments)'
    ],
    exchange_details: 'wise@transferwise.com',
    reserve: 100000
  },
  { 
    id: 2,
    name: 'Wise',
    fiat_id: 2,
    img: 'https://kingex.io/storage/payment_systems/iex-dBEnOzAwvw.png',
    details: [
      'Enter your e-mail',
      'Wise Email (enabled to receive payments)'
    ],
    exchange_details: 'wise@transferwise.com',
    reserve: 100000
  },
  { 
    id: 3,
    name: 'Payoneer',
    fiat_id: 1,
    img: 'https://kingex.io/storage/payment_systems/iex-RuUmV3DDw1.png',
    details: [
      'Enter your e-mail',
      'Payoneer email'
    ],
    exchange_details: 'payoneer@@payoneer.com',
    reserve: 100000
  },
  { 
    id: 4,
    name: 'SWIFT',
    fiat_id: 1,
    img: 'https://kingex.io/storage/payment_systems/iex-C6VjWeYVKS.png',
    details: [
      'Enter your e-mail',
      'IBAN or Account Number',
      'Reference for payment(optional)',
      'Country',
      'City, address, postal code',
      'Full name or company name',
      'ACH/ABA Number (for USA)',
      'SWIFT/BIC code'
    ],
    exchange_details: 'AAAA-BB-CC-123',
    reserve: 100000
  },
  { 
    id: 5,
    name: 'SEPA',
    fiat_id: 2,
    img: 'https://kingex.io/storage/payment_systems/iex-Fc8FQdrXAm.png',
    details: [
      'Enter your e-mail',
      'IBAN or Account Number',
      'Reference for payment(optional)',
      'Full name or company name'
    ],
    exchange_details: 'LT109010140000071219812874',
    reserve: 100000
  },
  { 
    id: 6,
    name: 'Skrill',
    fiat_id: 1,
    img: 'https://kingex.io/storage/payment_systems/iex-Fc8FQdrXAm.png',
    details: [
      'Enter your e-mail',
      'Skrill account'
    ],
    exchange_details: 'myskrill@example',
    reserve: 100000
  },
  { 
    id: 7,
    name: 'Skrill',
    fiat_id: 2,
    img: 'https://kingex.io/storage/payment_systems/iex-Fc8FQdrXAm.png',
    details: [
      'Enter your e-mail',
      'Skrill account'
    ],
    exchange_details: 'myskrill@example',
    reserve: 100000
  },
  // { 
  //   id: 8,
  //   name: 'Privat Bank',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-RNMj9rCQxz.svg',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 9,
  //   name: 'Monobank',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-BPOgk2m2ot.svg',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 10,
  //   name: 'PUMB',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-Fz9mOOHzoS.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 11,
  //   name: 'A-Bank',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-sZPC2G1Vmy.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 12,
  //   name: 'Sense Bank',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-vqWbJB19cI.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 13,
  //   name: 'Oschadbank',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-NFWMduYse4.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 14,
  //   name: 'UkrSibBank',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-0l5EyysYby.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 15,
  //   name: 'Izibank',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-MZCdbdzR4F.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 16,
  //   name: 'NeoBank',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-85PlQMVdAS.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 17,
  //   name: 'OTP Bank',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-Ew0wZr2Lib.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number'
  //   ]
  // },
  // { 
  //   id: 18,
  //   name: 'Kaspi Bank',
  //   fiat_id: 6,
  //   img: 'https://kingex.io/storage/payment_systems/iex-bdnrAabA5j.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number',
  //     'Full name'
  //   ]
  // },
  // { 
  //   id: 19,
  //   name: 'Halyk Bank',
  //   fiat_id: 6,
  //   img: 'https://kingex.io/storage/payment_systems/iex-xk2ttvXtZc.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number',
  //     'Full name'
  //   ]
  // },
  // { 
  //   id: 20,
  //   name: 'Jusan Bank',
  //   fiat_id: 6,
  //   img: 'https://kingex.io/storage/payment_systems/iex-pr3ykibfNu.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number',
  //     'Full name',
  //     'Phone number linked to account'
  //   ]
  // },
  // { 
  //   id: 21,
  //   name: 'Forte Bank',
  //   fiat_id: 6,
  //   img: 'https://kingex.io/storage/payment_systems/iex-bgCiMYo4nW.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number',
  //     'Full name'
  //   ]
  // },
  // { 
  //   id: 22,
  //   name: 'Bereke Bank',
  //   fiat_id: 6,
  //   img: 'https://kingex.io/storage/payment_systems/iex-E8kO3Fnsv8.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number',
  //     'Full name'
  //   ]
  // },
  // { 
  //   id: 23,
  //   name: 'EasyPaisa',
  //   fiat_id: 13,
  //   img: 'https://kingex.io/storage/payment_systems/iex-qa2YIbhROd.png',
  //   details: [
  //     'Enter your e-mail',
  //     'EasyPaisa Account Number',
  //     'Full name'
  //   ]
  // },
  // { 
  //   id: 24,
  //   name: 'Alipay',
  //   fiat_id: 10,
  //   img: 'https://kingex.io/storage/payment_systems/iex-mbpozSzJF8.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Alipay Account',
  //     'Full name or company name'
  //   ]
  // },
  // { 
  //   id: 25,
  //   name: 'UnionPay',
  //   fiat_id: 10,
  //   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/1200px-UnionPay_logo.svg.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number',
  //     'Full name or company name',
  //     'Bank name'
  //   ]
  // },
  { 
    id: 26,
    name: 'Bank transfer',
    fiat_id: 2,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
    details: [
      'Enter your e-mail',
      'IBAN',
      'Reference for payment(optional)',
      'Full name or company name',
      'Bank name'
    ],
    exchange_details: '1234567898765432',
    reserve: 100000
  },
  { 
    id: 27,
    name: 'Bank transfer',
    fiat_id: 3,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
    details: [
      'Enter your e-mail',
      'IBAN or account number',
      'Full name',
      'Bank name'
    ],
    exchange_details: '1234567898765432',
    reserve: 100000
  },
  { 
    id: 28,
    name: 'Bank transfer',
    fiat_id: 4,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
    details: [
      'Enter your e-mail',
      'Account number',
      'Reference for payment(optional)',
      'Full name or company name',
      'Sort Code'
    ],
    exchange_details: '1234567898765432',
    reserve: 100000
  },
  // { 
  //   id: 29,
  //   name: 'Bank transfer',
  //   fiat_id: 5,
  //   img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
  //   details: [
  //     'Enter your e-mail',
  //     'IBAN',
  //     'Reference for payment(optional)',
  //     'Full name or company name',
  //     'EDRPOU or RNOKPP'
  //   ]
  // },
  // { 
  //   id: 30,
  //   name: 'Bank transfer',
  //   fiat_id: 7,
  //   img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
  //   details: [
  //     'Enter your e-mail',
  //     'IBAN',
  //     'Full name or company name',
  //     'Bank name'
  //   ]
  // },
  // { 
  //   id: 31,
  //   name: 'Bank transfer',
  //   fiat_id: 8,
  //   img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
  //   details: [
  //     'Enter your e-mail',
  //     'IBAN',
  //     'Full name or company name',
  //     'Bank name'
  //   ]
  // },
  // { 
  //   id: 32,
  //   name: 'Bank transfer',
  //   fiat_id: 9,
  //   img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
  //   details: [
  //     'Enter your e-mail',
  //     'IBAN',
  //     'Full name or company name',
  //     'Bank name'
  //   ]
  // },
  // { 
  //   id: 33,
  //   name: 'Bank transfer',
  //   fiat_id: 10,
  //   img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
  //   details: [
  //     'Enter your e-mail',
  //     'Card number or account number',
  //     'Full name or company name',
  //     'Bank name'
  //   ]
  // },
  // { 
  //   id: 34,
  //   name: 'Bank transfer',
  //   fiat_id: 11,
  //   img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
  //   details: [
  //     'Enter your e-mail',
  //     'IBAN or account number',
  //     'Full name',
  //     'Bank name',
  //     'IFSC Code'
  //   ]
  // },
  // { 
  //   id: 35,
  //   name: 'Bank transfer',
  //   fiat_id: 12,
  //   img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
  //   details: [
  //     'Enter your e-mail',
  //     'IBAN or account number',
  //     'Full name',
  //     'Bank name'
  //   ]
  // },
  // { 
  //   id: 36,
  //   name: 'Bank transfer',
  //   fiat_id: 13,
  //   img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
  //   details: [
  //     'Enter your e-mail',
  //     'IBAN',
  //     'Full name',
  //     'Bank name'
  //   ]
  // },
  { 
    id: 37,
    name: 'Bank transfer',
    fiat_id: 14,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png',
    details: [
      'Enter your e-mail',
      'IBAN',
      'Reference for payment(optional)',
      'Full name or company name',
      'Bank name'
    ],
    exchange_details: '1234567898765432',
    reserve: 100000
  }
];

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(tableName, banksData);
  },

  down: queryInterface => {
    const cryptocurrencyIds = banksData.map(c => c.id);
    return queryInterface.bulkDelete(tableName, { id: cryptocurrencyIds });
  }
};
