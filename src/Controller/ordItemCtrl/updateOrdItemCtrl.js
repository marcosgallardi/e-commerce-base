const { OrderItems } = require("../../DB_Connection");

const updateOrdItemctrl = async ({ id, order_id, product_id, quantity, price }) => {
    try {
        const orderItem = await OrderItems.findByPk(id);
        if (order_id) orderItem.order_id = order_id;
        if (product_id) orderItem.product_id = product_id;
        if (quantity) orderItem.quantity = quantity;
        if (price) orderItem.price = price;
        orderItem.save()
        if (orderItem) {
            return orderItem;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateOrdItemctrl;