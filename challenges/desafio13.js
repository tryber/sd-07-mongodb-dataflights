db.voos.count({
  $nor: [
    { "aeroportoDestino.continente": { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } },
  ],
});
