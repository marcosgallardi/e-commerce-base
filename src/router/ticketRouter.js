const { Router } = require("express");
const createTicketHandler = require("../Handler/ticketHandlers/createTicketHandler");
const deleteTicketHandler = require("../Handler/ticketHandlers/deleteTicketHandler");
const updateTicketHandler = require("../Handler/ticketHandlers/updateTicketHandler");
const getTicketHandler = require("../Handler/ticketHandlers/getTicketHandler");

const ticketRouter = Router();

ticketRouter.post("/create", createTicketHandler)
ticketRouter.put("/update", updateTicketHandler)
ticketRouter.delete("/delete/:id", deleteTicketHandler)
ticketRouter.get("/", getTicketHandler)


module.exports = ticketRouter;