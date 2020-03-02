"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Config_1 = require("../config/Config");
const Feed_1 = __importDefault(require("../model/Feed"));
exports.DatabaseLoader = () => {
    const configuration = Config_1.config;
    const sequelize = new sequelize_typescript_1.Sequelize({
        'username': configuration.username,
        'password': configuration.password,
        'database': configuration.database,
        'host': configuration.host,
        dialect: 'postgres',
        storage: ':memory:',
    });
    sequelize.addModels([Feed_1.default]);
    sequelize.sync();
};
//# sourceMappingURL=DatabaseLoader.js.map