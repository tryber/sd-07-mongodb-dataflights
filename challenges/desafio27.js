const contagem = db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: contagem });

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0 });
