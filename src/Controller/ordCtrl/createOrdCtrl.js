const { orders } = require("../../DB_Connection");

const createOrdCtrl = async ({ }) => {
    try {
        const data = await orders.create({});
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = createOrdCtrl;