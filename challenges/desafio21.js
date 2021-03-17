db.voos.findOne({ $and: [
  { litrosCombustivel: { $exists: true } },
  { litrosCombustivel: { $gte: 1000 } },
] },
{ _id: false, vooId: true });
