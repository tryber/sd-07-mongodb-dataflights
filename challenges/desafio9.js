// enunciado errado ou no minimo dúbio, entre dois anos é de jan a jan.
// Pode mudar o enunciado para dois anos mais distantes e fazer de jan a jan.
db.voos.count({ $and: [{ ano: { $lte: 2018 } }, { ano: { $gte: 2017 } }] });
