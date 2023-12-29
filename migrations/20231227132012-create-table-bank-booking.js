const bankBookingTableName = 'bank_booking';
const banksTableName = 'banks';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(bankBookingTableName, {
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
      booked_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable(bankBookingTableName);
  }
};
