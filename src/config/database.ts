import { SequelizeOptions } from 'sequelize-typescript';
import { config } from './configEnv';

const sequelizeConfig: SequelizeOptions = {
    dialect: 'mysql',
    host: config.mysql.host,
    port: 3306,
    username: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    models: [__dirname + '/**/*.model.ts'],
    define: {
        timestamps: true,
        underscored: true,
    },
};

export default sequelizeConfig;