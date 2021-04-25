db.voos.find({ litrosCombustivel: { $not: { $gt: 1000 } },
  $and: [{ litrosCombustivel: { $exists: true } }] },
{ _id: 0, vooId: true, litrosCombustivel: true }).limit(1);
