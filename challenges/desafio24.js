db.voos.findOne(
  {
    $and: [
      {
        litrosCombustivel: { $lt: 600 },
      },
      {
        $nor: [{ "empresa.nome": { $in: ["GOL", "AZUL"] } }],
      },
    ],
  },
  { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 },
);
