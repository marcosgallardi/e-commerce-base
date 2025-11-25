const { tickets } = require("../../DB_Connection");

const createTicketCtrl = async () => {
    try {
        const data = await tickets.create();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = createTicketCtrl;