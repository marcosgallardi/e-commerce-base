const { Orders } = require("../../DB_Connection");

const createOrdCtrl = async ({ user_id, total, status }) => {
    try {
        const data = await Orders.create({ user_id, total, status });
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