const getTicketCtrl = require("../../Controller/ticketCtrl/getTicketCtrl");

const getTicketHandler = async (req, res) => {
    // const { algo1, algo2 } = req.body;

    try {
        const ticket = await getTicketCtrl();

        if (ticket) {
            res.status(200).json(ticket);
        } else {
            res.status(400).json(false);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        throw new Error(error.message);
    }
};

module.exports = getTicketHandler;