const deleteOrdHandler = async (req, res) => {
    const { algo1, algo2 } = req.body;

    try {
        const data = await deleteOrdCtrl({ algo1, algo2 });

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

module.exports = deleteOrdHandler;