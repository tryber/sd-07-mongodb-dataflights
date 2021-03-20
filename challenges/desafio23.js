db.voos.findOne(
  {
    litrosCombustivel: {
      $exists: true,
      $not: { $gt: 1000 },
    },
  },
  {
    _id: false,
    vooId: true,
    litrosCombustivel: true,
  },
);
