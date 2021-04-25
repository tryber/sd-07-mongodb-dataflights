const valor = db.voos.count({ natureza: "Doméstica", "empresa.nome": "PASSAREDO" });

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: valor,
});

db.resumoVoos.findOne({}, { _id: false });
