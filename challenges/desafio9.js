db.getCollection("voos")
  .count({ ano: { $gte: 2017, $lte: 2018 } });
