const { orders } = require("../../DB_Connection");

const deleteOrdCtrl = async () => {
    try {
        const data = await orders.delete();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = deleteOrdCtrl;