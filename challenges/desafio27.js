const quantidadeVoos = db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: quantidadeVoos,
});

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: false, empresa: true, totalVoosDomesticos: true });
