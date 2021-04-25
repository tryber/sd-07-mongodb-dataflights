db.voos.find({ "empresa.nome": "GOL", ano: 2017 },
  { vooId: true,
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    _id: false,
    mes: true,
    ano: true }).limit(10);
