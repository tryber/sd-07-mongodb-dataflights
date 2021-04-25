db.getCollection("voos")
  .countDocuments({
    $and: [
      { ano: { $gt: 2016 } },
      { ano: { $lt: 2019 } },
    ],
  });
