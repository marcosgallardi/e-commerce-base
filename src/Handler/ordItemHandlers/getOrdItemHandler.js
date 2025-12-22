const getOrderItemCtrl = require("../../Controller/ordItemCtrl/getOrdItemCtrl");

const getOrdItemHandler = async (req, res) => {
    // const { } = req.body;

    try {
        const data = await getOrderItemCtrl();

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

module.exports = getOrdItemHandler;