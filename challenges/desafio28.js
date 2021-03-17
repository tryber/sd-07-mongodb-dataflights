const showLatamAirlines = { "empresa.nome": "LATAM AIRLINES BRASIL" };
const total = db.voos
  .find({ $and: [showLatamAirlines, { natureza: /Doméstica/ }] })
  .count();
db.resumoVoos.insert({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: total,
});
db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
