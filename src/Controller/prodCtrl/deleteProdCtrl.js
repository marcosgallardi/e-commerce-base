const { Products } = require("../../DB_Connection");

const deleteProdCtrl = async (id) => {
    try {
        const data = await Products.destroy({ where: { id } });
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = deleteProdCtrl;