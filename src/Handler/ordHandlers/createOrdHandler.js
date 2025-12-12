const createOrdCtrl = require("../../Controller/ordCtrl/createOrdCtrl");

const createOrdHandler = async (req, res) => {
    const { user_id, total, status } = req.body;

    try {
        const data = await createOrdCtrl({ user_id, total, status });

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

module.exports = createOrdHandler;