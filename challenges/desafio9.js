const totalDeVoos2017e2018 = {
  $and: [{ ano: { $gte: 2017 } }, { ano: { $lte: 2018 } }],
};
db.voos.count(totalDeVoos2017e2018);
