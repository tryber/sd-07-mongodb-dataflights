db.getCollection("voos").countDocuments({
  natureza: { $eq: "Internacional" },
});
