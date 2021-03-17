const voosGol = { "empresa.nome": "GOL" };
const ano = { ano: 2017 };
db.voos
  .find(
    { $and: [voosGol, ano] },
    {
      vooId: 1,
      "empresa.nome": 1,
      "aeroportoOrigem.nome": 1,
      "aeroportoDestino.nome": 1,
      ano: 1,
      mes: 1,
      _id: 0,
    },
  )
  .limit(10)
  .pretty();
