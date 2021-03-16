const voo = db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: voo });

db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
