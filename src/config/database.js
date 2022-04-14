require('dotenv').config(); // esse esta aqui para acessamos os dados .env

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOPtions: {
    // timezone: 'America/Sao_Paulo',
  },
  // timezone: 'America/Sao_Paulo',
};

// depois de ter feito esse arquivo, acessar o mysqlworkbench e criar o
// schema la com o nome do database que esta nesse arquivo e
// com utf8mb4 e utfomb4_general_ci

// depois criar uma migracao // npx sequelize migration:create --name=alunos
// se o sequelize nao estiver baixado npm i sequelize mariadb
// e npm i -D sequelize-cli
