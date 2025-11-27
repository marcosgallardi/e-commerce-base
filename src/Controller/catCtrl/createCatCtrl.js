const { Categories } = require("../../DB_Connection");

const createCatCtrl = async ({ name, description }) => {
    try {
        const data = await Categories.create({ name, description });
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