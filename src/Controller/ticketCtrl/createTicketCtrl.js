const { Tickets } = require("../../DB_Connection");

const createTicketCtrl = async ({ orderId, fecha }) => {
    try {
        const ticket = await Tickets.create({ orderId, fecha });
        if (ticket) {
            return ticket;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = createTicketCtrl;