db.getCollection("voos")
  .find(
    {
      "empresa.nome": "AZUL",
    },
  ).limit(10);
