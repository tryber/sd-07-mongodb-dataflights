db.voos.find({ "aeroportoDestino.pais": { $not: /ESTADOS UNIDOS/i } }).count();
