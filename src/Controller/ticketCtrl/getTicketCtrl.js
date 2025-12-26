const { Tickets } = require("../../DB_Connection");

const getTicketCtrl = async () => {
    try {
        const data = await Tickets.findAll();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = getTicketCtrl;