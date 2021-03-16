db.getCollection("voos").count({
  natureza: { $eq: "Internacional" },
});
