db.getCollection("voos")
  .countDocuments({ ano: { $lt: 2017 } });
