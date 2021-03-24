const voosDomesticos = db.voos.count({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: voosDomesticos });
db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
