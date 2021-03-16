db.voos.findOne({ $or: [{ "empresa.nome": "AMERICAN AIRLINES" }, { "empresa.nome": "DELTA AIRLINES" }], "aeroportoOrigem.sigla": "SBGR", "aeroportoDestino.sigla": "KJFK" }, { _id: 0, vooId: 1 });
