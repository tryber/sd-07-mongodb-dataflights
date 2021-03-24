db.voos.find({ litrosCombustivel: { $lte: 600 }, "empresa.sigla": { $nin: ["GLO", "AZU"] } },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 }).limit(1);
