db.voos.countDocuments({ $or: [{ ano: { $lte: 2018, $gte: 2017 } }] });
