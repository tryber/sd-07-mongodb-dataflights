db.getCollection("voos")
  .findOne({
    $and: [
      { litrosCombustivel: { $lt: 600 } },
      { "empresa.nome": { $ne: "AZUL" } },
      { "empresa.nome": { $ne: "GOL" } },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
  });
