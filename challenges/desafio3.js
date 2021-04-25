db.getCollection("voos")
  .countDocuments({ "empresa.nome": "AZUL" });
