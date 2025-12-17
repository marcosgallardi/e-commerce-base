const { Products } = require("../../DB_Connection");

const createProdCtrl = async ({ name, price, description, stock, category_id }) => {
    try {
        const data = await Products.create({
            name,
            price,
            description,
            stock,
            category_id
        });
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = createProdCtrl;