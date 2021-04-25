db.voos.find({ rtk: { $not: { $exists: true } } }, { _id: 0, vooId: 1 }).limit(1);
