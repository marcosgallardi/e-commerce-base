const { orderItems } = require("../../DB_Connection");

const deleteOrdItemCtrl = async () => {
  try {
    const data = await orderItems.;
    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = deleteOrdItemCtrl;