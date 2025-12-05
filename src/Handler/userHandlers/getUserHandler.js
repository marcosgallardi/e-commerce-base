const getUserCtrl = require("../../Controller/userCtrl/getUserCtrl");

const getUserHandler = async (req, res) => {
    // const { id } = req.body;

    try {
        const data = await getUserCtrl();

        if (data) {
            res.status(200).json(data);
        } else {
            res.status(400).json(false);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        throw new Error(error.message);
    }
};

module.exports = getUserHandler;