const { categories } = require("../../DB_Connection");

const createCatCtrl = async ({ }) => {
    try {
        const data = await categories.create({});
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = createCatCtrl;