// db.voos.find({
//   $and: [{ natureza: "Doméstica" }, { "empresa.nome": "PASSAREDO" }],
// }).count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 });

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0 });
