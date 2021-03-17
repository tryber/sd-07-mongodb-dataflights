db.voos.findOne({ $and: [
  { litrosCombustivel: { $lt: 600 } },
  { litrosCombustivel: { $exists: true } },
  { "empresa.nome": { $ini: ["GOL", "AZUL"] } },
] },

{ _id: false, vooId: true, litrosCombustivel: true, "empresa.nome": true });
