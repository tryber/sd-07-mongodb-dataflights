const totalValue = db.voos.countDocuments({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: totalValue,
});

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0 });
