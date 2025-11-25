const { orderItems } = require("../../DB_Connection");

const deleteOrdItemCtrl = async () => {
    try {
        const data = await orderItems.delete();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = deleteOrdItemCtrl;