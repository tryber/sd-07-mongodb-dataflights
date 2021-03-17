db.getCollection("voos").countDocuments({
  natureza: { $eq: "Doméstica" },
});
