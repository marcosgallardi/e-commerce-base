const { categories } = require("../../DB_Connection");

const getCatCtrl = async () => {
    try {
        const data = await categories.find({});
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = getCatCtrl;