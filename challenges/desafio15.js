db.getCollection("voos")
  .countDocuments({ decolagens: { $gt: 20 } });
