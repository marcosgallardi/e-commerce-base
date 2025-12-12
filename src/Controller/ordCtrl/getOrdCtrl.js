const { Orders } = require("../../DB_Connection");

const getOrdCtrl = async () => {
    try {
        const data = await Orders.findAll();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = getOrdCtrl;