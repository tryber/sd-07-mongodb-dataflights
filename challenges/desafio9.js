db.getCollection("voos").countDocuments({
  ano: {
    $in: [2017, 2018] },
});
