const updateOrdItemctrl = require("../../Controller/ordItemCtrl/updateOrdItemCtrl");

const updateOrdItemHandler = async (req, res) => {
    const { id, order_id, product_id, quantity, price } = req.body;

    try {
        const data = await updateOrdItemctrl({ id, order_id, product_id, quantity, price });

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

module.exports = updateOrdItemHandler;