const createOrdHandler = async (req, res) => {
    const { } = req.body;

    try {
        const data = await createOrdCtrl({});

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