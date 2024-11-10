'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Users', 'createdAt', {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        });
        await queryInterface.addColumn('Users', 'updatedAt', {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Users', 'createdAt');
        await queryInterface.removeColumn('Users', 'updatedAt');
    }
};

