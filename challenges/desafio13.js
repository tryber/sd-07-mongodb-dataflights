db.getCollection("voos").count({
  "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] },
});
