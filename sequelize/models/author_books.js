'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthorBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Author, { foreignKey: 'author_id' });
      this.belongsTo(models.Book, { foreignKey: 'book_id' });
    }
  }
  AuthorBooks.init({
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'cascade'
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'cascade'
    }
  }, {
    sequelize,
    modelName: 'AuthorBooks',
    underscored: true
  });
  return AuthorBooks;
};