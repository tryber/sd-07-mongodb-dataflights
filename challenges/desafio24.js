db.voos.findOne(
  {
    $and:
    [
      {
        litrosCombustivel:
          {
            $not: { $gt: 600 },
            $exists: true,
          },
      },
      {
        "empresa.sigla": { $nin: ["GOL", "AZUL"] },
      },
    ],
  },
  {
    vooId: true,
    "empresa.nome": true,
    litrosCombustivel: true,
    _id: false,
  },
);
