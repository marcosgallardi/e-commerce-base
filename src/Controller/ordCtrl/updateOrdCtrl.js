const { Orders } = require("../../DB_Connection");

const updateOrdCtrl = async ({ id, total, status }) => {
    try {
        const order = await Orders.findByPk(id);
        if (total) order.total = total;
        if (status) order.status = status;
        await order.save();
        if (order) {
            return order;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateOrdCtrl;