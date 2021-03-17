db.getCollection("voos")
  .countDocuments({
    "aeroportoDestino.pais": {
      $ne: "ESTADOS UNIDOS" },
  });
