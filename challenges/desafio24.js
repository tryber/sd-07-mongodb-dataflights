db.voos.find(
  {
    listrosCombustivel: {
      $exists: true,
      $not: { $gt: 600 },
    },
    "empresa.nome": {
      $nor: ["GOL", "AZUL"],
    },
  },
  {
    _id: false,
    vooId: true,
    listrosCombustivel: true,
  },
);
