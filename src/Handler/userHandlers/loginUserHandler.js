const loginUserCtrl = require("../../Controller/userCtrl/loginUserCtrl");

const loginUserHandler = async (req, res) => {
    const { email, password } = req.body;

    try {
        const data = await loginUserCtrl({ email, password });

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

module.exports = loginUserHandler;