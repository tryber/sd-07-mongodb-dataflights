db.voos.findOne({
  $nor: [
    { litrosCombustivel: { $gt: 600 } },
    {
      $or: [
        { "empresa.nome": { $eq: "GOL" } },
        { "empresa.nome": { $eq: "AZUL" } },
      ],
    },
  ],
  $and: [
    { litrosCombustivel: { $exists: true } },
  ],
}, { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true });
