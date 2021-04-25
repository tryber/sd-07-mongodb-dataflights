db.getCollection("voos")
  .count({ decolagens: { $gt: 20 } });
