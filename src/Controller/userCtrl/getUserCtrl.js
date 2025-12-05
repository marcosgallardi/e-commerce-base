const { User } = require("../../DB_Connection");

const getUserCtrl = async () => {
    try {
        const data = await User.findAll();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = getUserCtrl;