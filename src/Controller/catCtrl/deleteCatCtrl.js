const { categories } = require("../../DB_Connection");

const deleteCatCtrl = async () => {
    try {
        const data = await categories.deleteMany({});
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