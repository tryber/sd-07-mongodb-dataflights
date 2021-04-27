db.voos.countDocuments({
  $or: [
    { "aeroportoDestino.pais": "BRASIL" },
    { "aeroportoDestino.pais": "CHILE" },
    { "aeroportoDestino.pais": "ARGENTINA" },
  ],
});
