const { OrderItems } = require("../../DB_Connection");

const getOrderItemCtrl = async () => {
    try {
        const data = await OrderItems.findAll();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = getOrderItemCtrl;