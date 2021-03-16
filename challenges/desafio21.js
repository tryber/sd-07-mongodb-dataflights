db.voos
  .find(
    {
      $and: [
        { litrosCombustivel: { $gte: 1000 } },
        { litrosCombustivel: { $exists: true } },
      ],
    },
    { _id: 0, vooId: 1 },
  )
  .limit(1);
