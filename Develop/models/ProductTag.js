const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // refers to the 'product' model
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // refers to the 'tag' model
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use snake_case for automatically generated attributes
    modelName: 'product_tag' // Define the model name
  }
);

module.exports = ProductTag;
