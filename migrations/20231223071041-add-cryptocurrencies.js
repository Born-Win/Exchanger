const tableName = 'cryptocurrencies';

const cryptoData = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    img: 'https://kingex.io/storage/payment_systems/iex-server-YW11H13kJU.png',
    min_exchange: 0.00001,
    wallet: '17vZuQWiRWAi3FyTZakotSjvvP9GeHSJS',
    reserve: 10
  },
  {
    id: 2,
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    img: 'https://ih1.redbubble.net/image.410523143.6103/st,small,507x507-pad,600x600,f8f8f8.u1.jpg',
    min_exchange: 0.001,
    wallet: '17vZuQWiRWAi3FyTZakotSjvvP9GeHSJS',
    reserve: 1000
  },
  {
    id: 3,
    name: 'Ethereum',
    symbol: 'ETH',
    img: 'https://kingex.io/storage/payment_systems/iex-server-STnkQSCtqe.png',
    min_exchange: 0.0001,
    wallet: '17vZuQWiRWAi3FyTZakotSjvvP9GeHSJS',
    reserve: 100
  },
  {
    id: 4,
    name: 'Tether ERC20',
    symbol: 'USDT',
    img: 'https://kingex.io/storage/payment_systems/iex-1aqkXoptWT.svg',
    min_exchange: 0.01,
    wallet: '17vZuQWiRWAi3FyTZakotSjvvP9GeHSJS' ,
    reserve: 100000
  },
  {
    id: 5,
    name: 'Tether TRC20',
    symbol: 'USDT',
    img: 'https://kingex.io/storage/payment_systems/iex-ZoQkvmnvWQ.png',
    min_exchange: 0.01,
    wallet: '17vZuQWiRWAi3FyTZakotSjvvP9GeHSJS',
    reserve: 100000
  },
  {
    id: 6,
    name: 'USD Coin ERC20',
    symbol: 'USDC',
    img: 'https://kingex.io/storage/payment_systems/iex-dvw9Sp92Jy.svg',
    min_exchange: 0.01,
    wallet: '17vZuQWiRWAi3FyTZakotSjvvP9GeHSJS',
    reserve: 100000
  },
  {
    id: 7,
    name: 'USD Coin TRC20',
    symbol: 'USDC',
    img: 'https://kingex.io/storage/payment_systems/iex-RyoeyFnbhI.png',
    min_exchange: 0.01,
    wallet: '17vZuQWiRWAi3FyTZakotSjvvP9GeHSJS',
    reserve: 100000
  }
];

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(tableName, cryptoData);
  },

  down: queryInterface => {
    const cryptocurrencyIds = cryptoData.map(c => c.id);
    return queryInterface.bulkDelete(tableName, { id: cryptocurrencyIds });
  }
};
