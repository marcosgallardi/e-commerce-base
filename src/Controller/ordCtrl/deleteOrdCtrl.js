const { Orders, sequelize } = require("../../DB_Connection");

const deleteOrdCtrl = async (id) => {
    const t = await sequelize.transaction();
    try {
        const order = await Orders.destroy({
            where: { id: id },
        },
            { transaction: t }
        );
        await t.commit();
        if (order) {
            return order;
        } else {
            await t.rollback();
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = deleteOrdCtrl;