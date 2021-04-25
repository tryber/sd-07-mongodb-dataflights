db.voos.find({ "aeroportoOrigem.continente": { $ne: { pais: "BRASIL" } } }).count();
