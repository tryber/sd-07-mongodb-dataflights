db.voos.find({
  $and: [
    { litrosCombustivel: { $not: { $gt: 600 } } },
    { empresa: { $not: { $in: ["GOL", "AZUL"] } } },
    { litrosCombustivel: { $exists: true } },
  ],
}, { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }).limit(1);
