db.getCollection("resumoVoos").insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.getCollection("voos").countDocuments({
    natureza: "Doméstica",
    "empresa.nome": "PASSAREDO",
  }),
});

db.getCollection("resumoVoos").findOne({
  empresa: "PASSAREDO" },
{ empresa: 1, totalVoosDomesticos: 1, _id: 0,
});
