const getCatCtrl = require("../../Controller/catCtrl/getCatCtrl");

const getCatHandler = async (req, res) => {


    try {
        const data = await getCatCtrl();

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

module.exports = getCatHandler;