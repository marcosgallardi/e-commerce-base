const { tickets } = require("../../DB_Connection");

const deleteTicketCtrl = async () => {
    try {
        const data = await tickets.delete();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = deleteTicketCtrl;