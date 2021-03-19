db.voos.count({ $nor: [
  { "aeroportoDestino.continente": "ÁSIA" },
  { "aeroportoDestino.continente": "EUROPA" },
  { "aeroportoDestino.continente": "OCEANIA" },
] });
