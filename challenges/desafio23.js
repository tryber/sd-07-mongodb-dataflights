db.voos.findOne({ $and: [{ litrosCombustivel: { $lt: 1000 } },
  { litrosCombustivel: { $exists: true } }] },
{ vooId: true, _id: 0, litrosCombustivel: true });
