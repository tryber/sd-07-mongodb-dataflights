db.getCollection("voos").find({ rtk: { $exists: false } }, { vooId: true, _id: 0 }).limit(1);
