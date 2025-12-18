const { Products } = require("../../DB_Connection");

const updateProdCtrl = async ({ id, name, price, description, stock, category_id }) => {
    const t = await sequelize.transaction();
    try {
        const product = await Products.findByPk(id);

        if (name) product.name = name;
        if (price) product.price = price;
        if (description) product.description = description;
        if (stock) product.stock = stock;
        if (category_id) product.category_id = category_id;

        await farmacia.save({ transaction: t });
        await t.commit();

        if (product) {
            return product;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateProdCtrl;