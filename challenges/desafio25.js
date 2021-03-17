db.voos
  .deleteMany({ $and: [{ litrosCombustivel: { $lt: 400 } }, { "empresa.nome": "AZUL" }] }, { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true });
