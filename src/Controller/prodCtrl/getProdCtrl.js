const { Products } = require("../../DB_Connection");

const getProdCtrl = async () => {
    try {
        const data = await Products.findAll();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = getProdCtrl;