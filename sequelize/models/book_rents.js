'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookRents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Person, { foreignKey: 'person_id' });
      this.belongsTo(models.Book, { foreignKey: 'book_id' });
    }
  }
  BookRents.init({
    person_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    book_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BookRents',
    underscored: true
  });
  return BookRents;
};