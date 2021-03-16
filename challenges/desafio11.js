db.getCollection("voos").count({
  "aeroportoDestino.pais": { $not: { $eq: "ESTADOS UNIDOS" } },
});
