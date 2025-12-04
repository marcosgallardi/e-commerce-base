const { User } = require("../../DB_Connection");

const createUserCtrl = async ({ name, email, password, role, }) => {
    try {
        const data = await User.create({ name, email, password, role, });
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