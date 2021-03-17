db.getCollection("resumoVoos").insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.getCollection("voos").countDocuments({
    natureza: "Doméstica",
    "empresa.nome": "LATAM AIRLINES BRASIL",
  }),
});

db.getCollection("resumoVoos").findOne({
  empresa: "LATAM AIRLINES BRASIL" },
{ empresa: 1, totalVoosDomesticos: 1, _id: 0,
});
