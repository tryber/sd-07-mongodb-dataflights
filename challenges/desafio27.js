db.voos.count({
  $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }],
});
db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: 4187,
});
db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
