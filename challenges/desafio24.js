db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $lte: 600 } },
      { litrosCombustivel: { $exists: true } },
      { $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] },
    ],
  },
  { _id: 0, vooId: 1, litrosCombustivel: 1 },
);
