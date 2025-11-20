const { orderItems } = require("../../DB_Connection");

const createOrdItemCtrl = async () => {
    try {
        const data = await orderItems.create({});
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