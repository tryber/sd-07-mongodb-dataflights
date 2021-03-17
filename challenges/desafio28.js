const totalVoosDomesticos = db.voos.countDocuments({
  "empresa.nome": "LATAM AIRLINES BRASIL",
  natureza: "Doméstica",
});

db.resumoVoos.insertOne(
  {
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos,
  },
);

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0 });
