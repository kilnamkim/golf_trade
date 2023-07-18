import {Sequelize} from 'sequelize'
import users from './models/users';

const trade_sequelize = new Sequelize('trade', 'trade', 'trade123', {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: console.log, 
  });

const db = {
    sequelize: trade_sequelize,
    users: users(trade_sequelize),
}

// trade_sequelize.sync()

export default db