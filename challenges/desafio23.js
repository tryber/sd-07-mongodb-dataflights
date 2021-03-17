db.voos.findOne(
  {
    litrosCombustivel:
    {
      $exists: true,
    },
    $and:
    [
      {
        litrosCombustivel:
        {
          $lt: 1000,
        },
      },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    litrosCombustivel: 1,
  },
);
