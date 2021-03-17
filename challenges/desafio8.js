const totalVoosMaior2016 = { ano: { $gt: 2016 } };
db.voos.count(totalVoosMaior2016);
