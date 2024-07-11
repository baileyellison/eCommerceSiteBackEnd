const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use snake_case for automatically generated attributes
    modelName: 'tag' // Define the model name
  }
);

module.exports = Tag;
