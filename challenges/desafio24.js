db.voos.findOne(
  {
    $and: [
      { "empresa.nome": { $ne: "GOL" } },
      { litrosCombustivel: { $not: { $gt: 600 } } },
      { litrosCombustivel: { $exists: true } },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
  },
);
