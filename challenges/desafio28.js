const nomeDaEmpresa = "LATAM AIRLINES BRASIL";
const numeroDevoos = db.voos.find({
  "empresa.nome": nomeDaEmpresa,
  natureza: "Doméstica",
}).count();

db.createCollection("resumoVoos");

db.resumoVoos.insertOne({ empresa: nomeDaEmpresa, totalVoosDomesticos: numeroDevoos });

db.resumoVoos.findOne({
  empresa: "LATAM AIRLINES BRASIL",
}, {
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
});
