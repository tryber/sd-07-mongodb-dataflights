db.getCollection("voos")
  .count({ "aeroportoOrigem.pais": { $not: { $eq: "BRASIL" } } });
