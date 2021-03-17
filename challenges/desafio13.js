db.getCollection("voos").countDocuments({
  $nor: [{
    "aeroportoDestino.continente": "EUROPA" }, { "aeroportoDestino.continente": "ÁSIA" }, { "aeroportoDestino.continente": "OCEANIA" }],
});
