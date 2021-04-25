db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: 4053 });
db.resumoVoos.find(
  { empresa: "PASSAREDO" },
  { _id: false, empresa: true, totalVoosDomesticos: true },
).limit(1); //
