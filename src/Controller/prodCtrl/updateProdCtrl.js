const { products } = require("../../DB_Connection");

const updateProdCtrl = async () => {
    try {
        const data = await products.update();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateProdCtrl;