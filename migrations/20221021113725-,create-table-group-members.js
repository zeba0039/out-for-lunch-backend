module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('group_members', {
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      groupId: {
        field: 'group_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('group_members');
  },
};
