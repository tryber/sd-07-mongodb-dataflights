db.voos.find({
  $and: [
    { litrosCombustivel: { $not: { $gt: 600 } } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    { litrosCombustivel: { $exists: true } },
  ],
},
{ _id: 0, vooId: true, "empresa.nome": true, litrosCombustivel: true }).limit(1);
