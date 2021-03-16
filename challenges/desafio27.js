db.voos.countDocuments({ $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }] });

db.resumoVoos.insertMany([{ empresa: "PASSAREDO", totalVoosDomesticos: 4187 }]);

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
