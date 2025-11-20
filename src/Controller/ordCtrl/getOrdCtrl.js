const { order } = require("../../DB_Connection");

const getOrdCtrl = async () => {
    try {
        const data = await order.findAll();
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