const { tickets } = require("../../DB_Connection");

const getTicketCtrl = async () => {
    try {
        const data = await tickets.getAll();
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