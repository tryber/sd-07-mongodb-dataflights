db.getCollection("voos").count({
  "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] },
});
