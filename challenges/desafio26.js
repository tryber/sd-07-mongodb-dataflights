db.getCollection("voos")
  .deleteMany(
    {
      $and: [
        { "passageiros.pagos": { $gte: 5 } },
        { "passageiros.pagos": { $lte: 10 } },
        { "empresa.nome": "GOL" },
      ],
    },
    {
      _id: 0,
      vooId: 1,
      "empresa.nome": 1,
      litrosCombustivel: 1,
    },
  );
