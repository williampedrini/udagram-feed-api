import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';

@Table
export default class Feed extends Model<Feed> {

    @Column
    public caption!: string;

    @Column
    public url!: string;

    @Column
    @CreatedAt
    public createdAt: Date = new Date();

    @Column
    @UpdatedAt
    public updatedAt: Date = new Date();
}
