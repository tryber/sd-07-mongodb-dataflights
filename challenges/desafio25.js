db.voos.deleteMany(
  {
    "empresa.nome": "AZUL",
    $and:
    [
      {
        litrosCombustivel:
        {
          $lt: 400,
        },
      },
    ],
  },
);
