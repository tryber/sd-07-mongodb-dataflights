db.voos.find({ "aeroportoOrigem.pais": { $not: /BRASIL/i } }).count();
