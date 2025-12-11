const { User } = require("../../DB_Connection");
const bcrypt = require("bcrypt");

const loginUserCtrl = async ({ email, password }) => {
    try {
        const users = await User.findOne({ where: { email: email } });

        const passwordMatch = await bcrypt.compare(password, users.password);
        console.log(passwordMatch);
        if (passwordMatch) {
            return users;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = loginUserCtrl;