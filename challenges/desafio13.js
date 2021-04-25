db.getCollection("voos")
  .countDocuments({
    "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] },
  },
  {});
