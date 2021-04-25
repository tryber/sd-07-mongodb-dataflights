db.voos.findOne(
  {
    $and: [
      { "aeroportoOrigem.sigla": "SBGR" },
      { "aeroportoDestino.sigla": "KJFK" },
      {
        $or: [
          { "empresa.nome": "DELTA AIRLINES" },
          { "empresa.nome": "AMERICAN AIRLINES" },
        ],
      },
    ],
  },
  { vooId: true, _id: false },
);
