db.getCollection("voos").find({ litrosCombustivel:
  { $gte: 1000 } }, { vooId: true, _id: 0 }).limit(1);
