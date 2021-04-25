const showGol = { "empresa.nome": "GOL" };
const ano2017 = { ano: 2017 };
db.voos
  .find(
    { $and: [showGol, ano2017] },
    {
      vooId: true,
      "empresa.nome": true,
      "aeroportoOrigem.nome": true,
      "aeroportoDestino.nome": true,
      mes: true,
      ano: true,
      _id: false,
    },
  )
  .limit(10);
