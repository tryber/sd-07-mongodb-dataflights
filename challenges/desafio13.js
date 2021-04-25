db.getCollection("voos")
  .count({ "aeroportoDestino.continente": { $not: { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } } });
