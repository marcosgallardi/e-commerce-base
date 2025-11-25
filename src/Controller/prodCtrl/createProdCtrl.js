const { products } = require("../../DB_Connection");

const createProdCtrl = async () => {
    try {
        const data = await products.create();
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