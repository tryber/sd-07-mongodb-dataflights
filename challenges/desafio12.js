db.voos.count({ $or: [{ "aeroportoDestino.pais": "ARGENTINA" }, { "aeroportoDestino.pais": "BRASIL" }, { "aeroportoDestino.pais": "CHILE" }] });
