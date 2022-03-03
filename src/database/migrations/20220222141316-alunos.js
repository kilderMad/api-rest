// migrations é para criar a tabela na base de dados com esses seguintes dados
// para esse aquivo ser criado é, porque nos nao criamos,
// so editamos, se cria com seguinte comando no terminal
// npx sequelize migration:create --name=alunos

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('alunos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    idade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('alunos'),
};

// depois de ter feito isso ir no console e colocar
// npx sequelize db:migrate
// verificar no workbench se foi criado na tabela as colunas que colocamos aqui

// para testar, ou continuar crie o model Aluno e o controller
