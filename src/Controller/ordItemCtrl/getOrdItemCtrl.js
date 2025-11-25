const { orderItems } = require("../../DB_Connection");

const getOrderItemCtrl = async () => {
    try {
        const data = await orderItems.getAll();
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