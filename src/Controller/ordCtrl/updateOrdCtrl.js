const { order } = require("../../DB_Connection");

const updateOrdCtrl = async ({ }) => {
    try {
        const data = await order.update({});
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateOrdCtrl;