const cryptoBookingTableName = 'crypto_booking';
const cryptoTableName = 'cryptocurrencies';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(cryptoBookingTableName, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
      booked_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable(cryptoBookingTableName);
  }
};
