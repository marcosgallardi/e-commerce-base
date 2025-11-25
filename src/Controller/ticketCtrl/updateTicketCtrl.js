const { tickets } = require("../../DB_Connection");

const updateTicketCtrl = async () => {
    try {
        const data = await tickets.update();
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = updateTicketCtrl;