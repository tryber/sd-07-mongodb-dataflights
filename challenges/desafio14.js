db.getCollection("voos").countDocuments({
  "aeroportoOrigem.pais": {
    $ne: "BRASIL" },
});
