import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // vou ler os models e todos que vem dentro do array com metodo init passando a conexao
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
