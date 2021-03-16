db.voos.find(
  {},
  { vooId: 1, mes: 1, ano: 1, _id: 0 },
  { "passageiros.pagos": { $gt: 7000 } },
).limit(1).pretty();
