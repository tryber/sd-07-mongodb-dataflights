db.voos
  .find(
    {
      $and: [
        { litrosCombustivel: { $exists: true } },
        { litrosCombustivel: { $lt: 1000 } },
      ],
    },
    { vooId: true, litrosCombustivel: true, _id: false },
  )
  .limit(1);
