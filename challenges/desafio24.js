db.voos.findOne({
  $nor: [{ litrosCombustivel: { $gte: 600 } },
    { "empresa.nome": { $in: ["GOL", "AZUL"] } },
  ],
  litrosCombustivel: { $exists: true },
},
{ _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 });
