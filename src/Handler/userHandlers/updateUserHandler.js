const updateUserHandler = async (req, res) => {
    const { id, name, email, password, role } = req.body;

    try {
        const data = await updateUserCtrl({ id, name, email, password, role });

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

module.exports = updateUserHandler;