const { Tickets } = require("../../DB_Connection");

const deleteTicketCtrl = async (id) => {
    try {
        const data = await Tickets.destroy({ where: { id } });
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