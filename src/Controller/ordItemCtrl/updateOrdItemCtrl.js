const { orderItems } = require("../../DB_Connection");

const updateOrdItemctrl = async () => {
    try {
        const data = await orderItems.update();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateOrdItemctrl;