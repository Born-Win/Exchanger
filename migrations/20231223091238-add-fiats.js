const tableName = 'fiats';

const fiatsData = [
  {
    id: 1,
    name: 'United States Dollar',
    symbol: 'USD'
  },
  {
    id: 2,
    name: 'Euro',
    symbol: 'EUR'
  },
  {
    id: 3,
    name: 'Japanese Yen',
    symbol: 'JPY'
  },
  {
    id: 4,
    name: 'British Pound',
    symbol: 'GBP'
  },
  // {
  //   id: 5,
  //   name: 'Ukraine Hryvnia',
  //   symbol: 'UAH'
  // },
  // {
  //   id: 6,
  //   name: 'Kazakhstani Tenge',
  //   symbol: 'KZT'
  // },
  // {
  //   id: 7,
  //   name: 'Turkish Lira',
  //   symbol: 'TRY'
  // },
  // {
  //   id: 8,
  //   name: 'Georgian Lari',
  //   symbol: 'GEL'
  // },
  // {
  //   id: 9,
  //   name: 'Polish Złoty',
  //   symbol: 'PLN'
  // },
  // {
  //   id: 10,
  //   name: 'Chinese Yuan Renminbi',
  //   symbol: 'CNY'
  // },
  // {
  //   id: 11,
  //   name: 'Indian Rupee',
  //   symbol: 'INR'
  // },
  // {
  //   id: 12,
  //   name: 'Nigerian Naira',
  //   symbol: 'NGN'
  // },
  // {
  //   id: 13,
  //   name: 'Pakistani Rupee',
  //   symbol: 'PKR'
  // },
  {
    id: 14,
    name: 'United Arab Emirates Dirham',
    symbol: 'AED'
  },
];

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(tableName, fiatsData);
  },

  down: queryInterface => {
    const fiatIds = fiatsData.map(f => f.id);
    return queryInterface.bulkDelete(tableName, { id: fiatIds });
  }
};
