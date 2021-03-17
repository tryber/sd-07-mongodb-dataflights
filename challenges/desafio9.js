db.voos.find({
  $and: [
    { ano: { $lte: 2017 } },
    { ano: { $gte: 2016 } },
  ],
}).count();
