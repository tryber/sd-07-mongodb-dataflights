db.voos.count({ $or: [{ "aeroportoDestino.continente": "EUROPA" }, { "aeroportoDestino.continente": "ÁSIA" }, { "aeroportoDestino.continente": "OCEANIA" }] });
