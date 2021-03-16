db.getCollection("voos").count({
  "aeroportoOrigem.pais": { $ne: "BRASIL" },
});
