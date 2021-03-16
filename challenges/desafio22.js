db.voos.findOne({
  $or: [
    { "empresa.nome": { $eq: "DELTA AIRLINE" } },
    { "empresa.nome": { $eq: "AMERICAN AIRLINES" } },
  ],
  $and: [
    { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
    { "aeroportoDestino.sigla": { $eq: "KJFK" } },
  ],
}, { _id: false, vooId: true });
