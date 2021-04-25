db.voos.deleteMany(
  {
    "empresa.nome": "GOL",
    $and: [
      { "passageiros.pagos": { $lte: 10 } },
      { "passageiros.pagos": { $gte: 5 } },
    ],
  },
  {
    "empresa.nome": true,
    "passageiros.pagos": true,
    _id: false,
  },
);
