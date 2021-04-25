db.voos
  .find(
    {
      $and: [
        { litrosCombustivel: { $lt: 600 } },
        { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
        { litrosCombustivel: { $exists: true } },
      ],
    },

    { vooId: true, _id: false, litrosCombustivel: true, "empresa.nome": true },
  )
  .limit(1);
