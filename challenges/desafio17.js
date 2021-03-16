db.getCollection("voos").count({
  natureza: { $eq: "Doméstica" },
});
