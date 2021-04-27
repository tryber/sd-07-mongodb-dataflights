db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $lt: 600 } },
      { litrosCombustivel: { $exists: true } },
      {
        $nor: [
          { "empresa.nome": { $eq: "GOL" } },
          { "empresa.nome": { $eq: "AZUL" } },
        ],
      },
    ],
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
