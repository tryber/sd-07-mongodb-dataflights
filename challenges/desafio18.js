db.voos.findOne({
  "passageiros.pagos": {
    $gt: 7000,
  },
}, {
  _id: 0,
  ano: 1,
  mes: 1,
  vooId: 1,
});
