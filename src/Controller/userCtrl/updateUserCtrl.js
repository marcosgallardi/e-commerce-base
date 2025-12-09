const { User,sequelize } = require("../../DB_Connection");

const updateUserCtrl = async ({ id, name, email, password, role }) => {
    const t = await sequelize.transaction();
    try {
        let user = await User.findByPk(id);
        if (!user) {
            throw new Error("User not found");
        }

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;
        if (role) user.role = role;

        await user.save({ transaction: t });

        await t.commit();

        return user;

    } catch (error) {
        await t.rollback();
        throw error;
    }
};

module.exports = updateUserCtrl;