import { Table, Column, Model, DataType, Default } from 'sequelize-typescript';

@Table({ tableName: 'transactions', timestamps: false })
export class Transaction extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  bank_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  crypto_id: number;
  
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  user_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  details: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  rate: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  crypto_amount: number;
  
  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  fiat_amount: number;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  wallet: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  status: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  crypto_to_bank: string;
  
  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  bank_to_crypto: string;
}
