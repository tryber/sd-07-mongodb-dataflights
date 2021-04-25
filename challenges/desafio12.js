db.getCollection("voos")
  .countDocuments({
    "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] },
  },
  {});
