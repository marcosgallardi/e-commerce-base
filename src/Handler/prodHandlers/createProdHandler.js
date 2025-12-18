const createProdCtrl = require("../../Controller/prodCtrl/createProdCtrl");

const createProdHandler = async (req, res) => {
    const { name, price, description, stock, category_id } = req.body;

    try {
        const data = await createProdCtrl({ name, price, description, stock, category_id });

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

module.exports = createProdHandler;