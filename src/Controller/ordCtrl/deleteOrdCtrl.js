const { Orders } = require("../../DB_Connection");

const deleteOrdCtrl = async (id) => {
    try {
        const order = await Orders.destroy({
            where: { id: id },
        });
        if (order) {
            return order;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = deleteOrdCtrl;