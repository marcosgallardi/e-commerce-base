const { Categories, sequelize } = require("../../DB_Connection");

const updateCatCtrl = async ({ id, name, description }) => {

    const t = await sequelize.transaction();

    try {
        let categoria = await Categories.findOne(
            where = {
                id: id
            }
        );

        if (!categoria) {
            return false;
        }

        if (name) categoria.name = name;
        if (description) categoria.description = description;

        await categoria.save({ transaction: t });
        await t.commit();

        if (categoria) {
            return categoria;
        } else {
            return false;
        }
    } catch (error) {
        await t.rollback(); 
        throw error;
    }
};

module.exports = updateCatCtrl;