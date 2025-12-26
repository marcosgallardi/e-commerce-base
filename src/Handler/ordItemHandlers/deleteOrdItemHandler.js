const deleteOrdItemCtrl = require("../../Controller/ordItemCtrl/deleteOrdItemCtrl");

const deleteOrdItemHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await deleteOrdItemCtrl(id);

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

module.exports = deleteOrdItemHandler;