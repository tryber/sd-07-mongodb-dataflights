const showPassaredo = { "empresa.nome": /PASSAREDO/ };
const total = db.voos
  .find({ $and: [showPassaredo, { natureza: /Doméstica/ }] })
  .count();
db.resumoVoos.insert({ empresa: "PASSAREDO", totalVoosDomesticos: total });
db.resumoVoos.find(
  { empresa: /PASSAREDO/ },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
