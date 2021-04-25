db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $lt: 600 } },
      { litrosCombustivel: { $exists: true } },
      { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    ],
  },
  {
    vooId: true,
    "empresa.nome": true,
    litrosCombustivel: true,
    _id: false,
  },
);
