db.voos.find(
  {
    "aeroportoOrigem.sigla": "SBGR",
    "aeroportoDestino.sigla": "KJFK",
    "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
  },
  { _id: 0, vooId: 1 },
).limit(1);
