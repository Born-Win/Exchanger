import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'crypto_booking', timestamps: false })
export class CryptoBooking extends Model {
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
  crypto_id: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  booked_amount: number;
}
