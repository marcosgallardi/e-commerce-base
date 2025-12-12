const updateOrdCtrl = require("../../Controller/ordCtrl/updateOrdCtrl");

const updateOrdHandler = async (req, res) => {
    const { id, total, status } = req.body;

    try {
        const data = await updateOrdCtrl({ id, total, status });

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

module.exports = updateOrdHandler;