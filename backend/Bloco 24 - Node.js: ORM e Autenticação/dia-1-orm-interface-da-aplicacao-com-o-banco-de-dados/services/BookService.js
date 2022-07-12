const { Books } = require('../models');

const getAll = async () => {
    const books = await Books.findAll();
    return books;
};

// const getAll = async () => {
//     const books = await Books.findAll({ 
//       order: [['title', 'ASC']],
//     });
//     return books;
// };


const getById = async (id) => {
  const book = await Books.findByPk(id);
  return book;
};

const create = async ({ title, author, pageQuantity, publisher }) => {
    const book = await Books.create({ title, author, pageQuantity, publisher });
    return book;
};

const update = async (id, {title, author, pageQuantity, publisher}) => {
    const [update] = await Books.update(
        {
            title,
            author,
            pageQuantity,
            publisher,
        },
        {where: { id }},
    );
    return update;
};

const remove = async (id) => {
    const removed = await Books.destroy({ where: { id } });
    return removed;
};

const getByAuthor = async (author) => {
    const books = await Books.findAll({ where: { author } });
    return books;
};

// const getByAuthor = async (author) => {
//     const books = await Books.findAll({ 
//       where: { author },
//       order: [['title', 'ASC']],
//     });
//     return books;
// };
  


module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getByAuthor,
}