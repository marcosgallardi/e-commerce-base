const { user } = require("../../DB_Connection");

const updateUserCtrl = async () => {
    try {
        const data = await user.update();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateUserCtrl;