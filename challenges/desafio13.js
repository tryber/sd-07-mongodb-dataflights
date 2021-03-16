db.voos
  .find({
    $and: [
      {
        "aeroportoDestino.pais": {
          $ne: "EUROPA",
        },
      },
      {
        "aeroportoDestino.pais": {
          $ne: "ÁSIA",
        },
      },
      {
        "aeroportoDestino.pais": {
          $ne: "OCEANIA",
        },
      },
    ],
  })
  .count();
