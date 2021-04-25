db.getCollection("voos")
  .deleteMany(
    {
      $and: [
        { litrosCombustivel: { $exists: true } },
        { litrosCombustivel: { $lt: 400 } },
        { "empresa.nome": "AZUL" },
      ],
    }, {},
  );
