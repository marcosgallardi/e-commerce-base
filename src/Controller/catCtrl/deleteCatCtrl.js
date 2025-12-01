const { Categories, sequelize } = require("../../DB_Connection");

const deleteCatCtrl = async ({ id }) => {
    const t = await sequelize.transaction();
    try {
        if (!id) {
            return false;
        }
        const data = await Categories.destroy({
            where: { id }
        },
            { transaction: t }
        );
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = deleteCatCtrl;