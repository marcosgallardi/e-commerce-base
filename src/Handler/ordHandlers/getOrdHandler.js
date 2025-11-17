const getOrdHandler = async (req, res) => {
    const { algo2, algo1 } = req.body;

    try {
        const data = await getOrdCtrl({ algo2, algo1 });

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

module.exports = getOrdHandler;