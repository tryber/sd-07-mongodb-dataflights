db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $lte: 600 } },
      { $nor: [
        { "empresa.nome": "GOL" },
        { "empresa.nome": "AZUL" },
      ] },
      { litrosCombustivel: { $exists: 1 } },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    litrosCombustivel: 1,
    "empresa.nome": 1,
  },
);
