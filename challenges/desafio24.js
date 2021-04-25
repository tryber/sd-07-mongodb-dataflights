db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lte: 600 } },
    { litrosCombustivel: { $exists: true } },
    { "empresa.nome": { $ne: "GOL" } },
    { "empresa.nome": { $ne: "AZUL" } },
  ],
}, { vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: false });
