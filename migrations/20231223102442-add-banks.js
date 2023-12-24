const tableName = 'banks';

const banksData = [
  { 
    id: 1,
    name: 'Wise',
    fiat_id: 1,
    img: 'https://kingex.io/storage/payment_systems/iex-dBEnOzAwvw.png'
  },
  { 
    id: 2,
    name: 'Wise',
    fiat_id: 2,
    img: 'https://kingex.io/storage/payment_systems/iex-dBEnOzAwvw.png'
  },
  { 
    id: 3,
    name: 'Payoneer',
    fiat_id: 1,
    img: 'https://kingex.io/storage/payment_systems/iex-RuUmV3DDw1.png'
  },
  { 
    id: 4,
    name: 'SWIFT',
    fiat_id: 1,
    img: 'https://kingex.io/storage/payment_systems/iex-C6VjWeYVKS.png'
  },
  { 
    id: 5,
    name: 'SEPA',
    fiat_id: 2,
    img: 'https://kingex.io/storage/payment_systems/iex-Fc8FQdrXAm.png'
  },
  { 
    id: 6,
    name: 'Skrill',
    fiat_id: 1,
    img: 'https://kingex.io/storage/payment_systems/iex-Fc8FQdrXAm.png'
  },
  { 
    id: 7,
    name: 'Skrill',
    fiat_id: 2,
    img: 'https://kingex.io/storage/payment_systems/iex-Fc8FQdrXAm.png'
  },
  { 
    id: 8,
    name: 'Privat Bank',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-RNMj9rCQxz.svg'
  },
  { 
    id: 9,
    name: 'Monobank',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-BPOgk2m2ot.svg'
  },
  { 
    id: 10,
    name: 'PUMB',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-Fz9mOOHzoS.png'
  },
  { 
    id: 11,
    name: 'A-Bank',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-sZPC2G1Vmy.png'
  },
  { 
    id: 12,
    name: 'Sense Bank',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-vqWbJB19cI.png'
  },
  { 
    id: 13,
    name: 'Oschadbank',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-NFWMduYse4.png'
  },
  { 
    id: 14,
    name: 'UkrSibBank',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-0l5EyysYby.png'
  },
  { 
    id: 15,
    name: 'Izibank',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-MZCdbdzR4F.png'
  },
  { 
    id: 16,
    name: 'NeoBank',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-85PlQMVdAS.png'
  },
  { 
    id: 17,
    name: 'OTP Bank',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-Ew0wZr2Lib.png'
  },
  { 
    id: 18,
    name: 'Kaspi Bank',
    fiat_id: 6,
    img: 'https://kingex.io/storage/payment_systems/iex-bdnrAabA5j.png'
  },
  { 
    id: 19,
    name: 'Halyk Bank',
    fiat_id: 6,
    img: 'https://kingex.io/storage/payment_systems/iex-xk2ttvXtZc.png'
  },
  { 
    id: 20,
    name: 'Jusan Bank',
    fiat_id: 6,
    img: 'https://kingex.io/storage/payment_systems/iex-pr3ykibfNu.png'
  },
  { 
    id: 21,
    name: 'Forte Bank',
    fiat_id: 6,
    img: 'https://kingex.io/storage/payment_systems/iex-bgCiMYo4nW.png'
  },
  { 
    id: 22,
    name: 'Bereke Bank',
    fiat_id: 6,
    img: 'https://kingex.io/storage/payment_systems/iex-E8kO3Fnsv8.png'
  },
  { 
    id: 23,
    name: 'EasyPaisa',
    fiat_id: 13,
    img: 'https://kingex.io/storage/payment_systems/iex-qa2YIbhROd.png'
  },
  { 
    id: 24,
    name: 'Alipay',
    fiat_id: 10,
    img: 'https://kingex.io/storage/payment_systems/iex-mbpozSzJF8.png'
  },
  { 
    id: 25,
    name: 'UnionPay',
    fiat_id: 10,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/1200px-UnionPay_logo.svg.png'
  },
  { 
    id: 26,
    name: 'Bank transfer',
    fiat_id: 2,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 27,
    name: 'Bank transfer',
    fiat_id: 3,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 28,
    name: 'Bank transfer',
    fiat_id: 4,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 29,
    name: 'Bank transfer',
    fiat_id: 5,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 30,
    name: 'Bank transfer',
    fiat_id: 7,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 31,
    name: 'Bank transfer',
    fiat_id: 8,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 32,
    name: 'Bank transfer',
    fiat_id: 9,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 33,
    name: 'Bank transfer',
    fiat_id: 10,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 34,
    name: 'Bank transfer',
    fiat_id: 11,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 35,
    name: 'Bank transfer',
    fiat_id: 12,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 36,
    name: 'Bank transfer',
    fiat_id: 13,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
  },
  { 
    id: 37,
    name: 'Bank transfer',
    fiat_id: 14,
    img: 'https://kingex.io/storage/payment_systems/iex-cXNCbFXTaQ.png'
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
