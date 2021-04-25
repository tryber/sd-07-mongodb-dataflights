db.getCollection("voos")
  .countDocuments({
    $and: [
      { "aeroportoDestino.continente": { $ne: "EUROPA" } },
      { "aeroportoDestino.continente": { $ne: "ÁSIA" } },
      { "aeroportoDestino.continente": { $ne: "OCEANIA" } },
    ],
  });
