import {MicroframeworkLoader} from 'microframework-w3tec';
import {Sequelize} from 'sequelize-typescript';
import {config} from '../config/Config';
import Feed from "../model/Feed";

export const DatabaseLoader: MicroframeworkLoader = () => {
    const configuration: any = config;
    const sequelize: Sequelize = new Sequelize({
        'username': configuration.username,
        'password': configuration.password,
        'database': configuration.database,
        'host': configuration.host,
        dialect: 'postgres',
        storage: ':memory:',
    });
    sequelize.addModels([Feed]);
    sequelize.sync();
};
