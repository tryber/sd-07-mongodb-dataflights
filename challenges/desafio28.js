const totalValue = db.voos.countDocuments({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" });

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: totalValue,
});

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0 });
