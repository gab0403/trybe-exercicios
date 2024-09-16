module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books',
      [{
        title: 'Christine',
        author: 'Stephen King',
        page_quantity: 616,
      },
      {
        title: 'Apanhador de Sonhos',
        author: 'Stephen King',
        page_quantity: 656,
      },
      {
        title: 'A Dança da Morte',
        author: 'Stephen King',
        page_quantity: '1248',
      }]
    );
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};