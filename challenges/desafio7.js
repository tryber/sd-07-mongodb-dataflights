const totalVoos2017 = { ano: { $lt: 2017 } };
db.voos.count(totalVoos2017);
