db.voos.find({
  $and: [
    {
      litrosCombustivel: { $not: { $gt: 600 } },
    },
    {
      litrosCombustivel: { $exists: true },
    },
    {
      "empresa.nome": { $nin: ["GOL", "AZUL"] },
    }] }, { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }).limit(1);
