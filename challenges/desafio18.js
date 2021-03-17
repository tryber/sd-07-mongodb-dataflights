db.voos.findOne(
  { "passageiros.pagos": { $gte: 7000 } },
  { _id: false, vooId: true, mes: true, ano: true },
);
