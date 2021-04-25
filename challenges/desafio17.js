db.getCollection("voos")
  .countDocuments(
    {
      natureza: "Doméstica",
    },
    {},
  );
