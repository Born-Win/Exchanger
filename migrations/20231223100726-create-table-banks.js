const banksTableName = 'banks';
const fiatsTableName = 'fiats';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(banksTableName, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fiat_id: {
        type: DataTypes.INTEGER,
        references: {
          model: fiatsTableName,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable(banksTableName);
  }
};
