const { OrderItems } = require("../../DB_Connection");

const createOrdItemCtrl = async ({ order_id, product_id, quantity, price }) => {
    try {
        const data = await OrderItems.create({ order_id, product_id, quantity, price });
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = createOrdItemCtrl;