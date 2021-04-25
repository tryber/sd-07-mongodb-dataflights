db.getCollection("voos")
  .find(
    {
      ano: { $eq: 2017 },
      "empresa.nome": "GOL",
    }, {
      vooId: true,
      "empresa.nome": true,
      "aeroportoOrigem.nome": true,
      "aeroportoDestino.nome": true,
      mes: true,
      ano: true,
      _id: false,
    },
  ).limit(10);
