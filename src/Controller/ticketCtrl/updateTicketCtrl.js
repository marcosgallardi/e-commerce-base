const { Tickets } = require("../../DB_Connection");

const updateTicketCtrl = async ({ id, orderId, fecha }) => {
    try {

        const ticket = await Tickets.findByPk(id);
        if (orderId) ticket.orderId = orderId;
        if (fecha) ticket.fecha = fecha;
        await ticket.save();

        if (ticket) {
            return ticket;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateTicketCtrl;