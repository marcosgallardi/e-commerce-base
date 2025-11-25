const { user } = require("../../DB_Connection");

const deleteUserCtrl = async () => {
    try {
        const data = await user.delete();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = deleteUserCtrl;