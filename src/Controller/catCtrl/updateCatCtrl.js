const { categories } = require("../../DB_Connection");

const updateCatCtrl = async () => {
    try {
        const data = await categories.updateOne({});
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateCatCtrl;