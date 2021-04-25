const quantidadeVoos = db.voos.find({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" }).count();

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: quantidadeVoos,
});

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: false, empresa: true, totalVoosDomesticos: true }).limit(1);
