module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('Books', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        page_quantity: DataTypes.INTEGER,
        publisher: DataTypes.STRING,
    },
    {
        timestamps: false,
        underscored: true,
    });
    
    return Books;
};