db.getCollection("voos")
  .count(
    {
      "empresa.nome": "GOL",
    },
  );
