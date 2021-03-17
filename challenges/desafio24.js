db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $not: { $gt: 600 }, $exists: true } },
      { $or: [{ "empresa.sigla": { $nin: ["GOL", "AZUL"] } }] },
    ],
  },
  { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 },
);
