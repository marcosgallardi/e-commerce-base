const deleteTicketCtrl = require("../../Controller/ticketCtrl/deleteTicketCtrl");

const deleteTicketHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await deleteTicketCtrl(id);

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

module.exports = deleteTicketHandler;