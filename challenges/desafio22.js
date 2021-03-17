db.voos.findOne({ $and: [{ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } }, { "aeroportoOrigem.sigla": "SBGR" }, { "aeroportoDestino.sigla": "kjfk" }] }, { vooId: 1, _id: 0 });
