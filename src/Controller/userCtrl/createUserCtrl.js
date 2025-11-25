const { user } = require("../../DB_Connection");

const createUserCtrl = async () => {
    try {
        const data = await user.create();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = createUserCtrl;