const { products } = require("../../DB_Connection");

const deleteProdCtrl = async () => {
    try {
        const data = await products.delete();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = deleteProdCtrl;