const createTicketCtrl = require("../../Controller/ticketCtrl/createTicketCtrl");

const createTicketHandler = async (req, res) => {
    const { orderId, fecha } = req.body;

    try {
        const ticket = await createTicketCtrl({ orderId, fecha });

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

module.exports = createTicketHandler;