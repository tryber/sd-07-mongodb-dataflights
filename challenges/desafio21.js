db.voos.findOne({ litrosCombustive: { $gt: 1000 } }, { _id: 0, vooId: 1 });
