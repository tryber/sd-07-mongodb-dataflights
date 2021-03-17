db.getCollection("voos").countDocuments({
  ano: {
    $gt: 2016 },
});
