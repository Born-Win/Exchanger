const tableName = 'cryptocurrencies';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      symbol: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false
      },
      min_exchange: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      wallet: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reserve: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable(tableName);
  }
};
