const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Products", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: DataTypes.STRING,
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Categories", key: "id" },
    },
  });

};