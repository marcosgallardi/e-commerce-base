const { OrderItems } = require("../../DB_Connection");

const deleteOrdItemCtrl = async (id) => {
    try {
        const data = await OrderItems.destroy({ where: { id } });
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