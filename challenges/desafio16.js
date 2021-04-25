db.getCollection("voos")
  .countDocuments(
    {
      natureza: "Internacional",
    },
    {},
  );
