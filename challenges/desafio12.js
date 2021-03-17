db.voos.count({
  $or: [{ "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } }],
});
