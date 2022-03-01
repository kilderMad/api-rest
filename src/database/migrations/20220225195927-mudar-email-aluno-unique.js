module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
  ),

  async down() {},
};
