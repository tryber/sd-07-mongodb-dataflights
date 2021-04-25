db.getCollection("voos")
  .count({ ano: { $lt: 2017 } });
