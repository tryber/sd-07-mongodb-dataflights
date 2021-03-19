db.voos.count({ $and: [{ ano: { $gt: 2016 } }, { ano: { $lt: 2019 } }] });
