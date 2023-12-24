import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'banks', timestamps: false })
export class Bank extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  fiat_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  img: string;
}
