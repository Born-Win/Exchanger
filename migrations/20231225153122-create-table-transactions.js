const transactionsTableName = 'transactions';
const banksTableName = 'banks';
const cryptoTableName = 'cryptocurrencies';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(transactionsTableName, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bank_id: {
        type: DataTypes.INTEGER,
        references: {
          model: banksTableName,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      crypto_id: {
        type: DataTypes.INTEGER,
        references: {
          model: cryptoTableName,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rate: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      crypto_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      fiat_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      wallet: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      crypto_to_bank: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      bank_to_crypto: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable(transactionsTableName);
  }
};
