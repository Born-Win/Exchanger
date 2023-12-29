import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'bank_booking', timestamps: false })
export class BankBooking extends Model {
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
    type: DataType.FLOAT,
    allowNull: false
  })
  booked_amount: number;
}
