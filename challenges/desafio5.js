db.voos.find({}, { vooId: true, _id: 0 }).limit(3).skip(9);
