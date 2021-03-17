db.voos.find({}, { _id: 0, vooId: true }).limit(3).skip(9);
