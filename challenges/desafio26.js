db.voos
  .deleteMany({ $and: [{ "passageiros.pagos": { $gte: 5 } }, { "passageiros.pagos": { $lte: 10 } }, { "empresa.nome": "GOL" }] },
    { id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true });
