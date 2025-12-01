const updateCatCtrl = require("../../Controller/catCtrl/updateCatCtrl");

const updateCatHandler = async (req, res) => {
    const { id, name, description } = req.body;

    try {
        const data = await updateCatCtrl({ id, name, description });

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

module.exports = updateCatHandler;