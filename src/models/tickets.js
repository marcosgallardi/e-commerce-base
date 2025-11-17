const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Tickets", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Orders",
                key: "id",
            },
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

};