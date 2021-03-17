db.voos.findOne({
  $and: [
    { litrosCombustivel: { $not: { $gt: 600 }, $exists: true } },
    { "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
  ],
},
{ vooId: 1, litrosCombustivel: 1, "empresa.nome": 1, _id: 0 });
