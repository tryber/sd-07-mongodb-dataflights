db.voos.findOne({ payload: { $gt: 7000 } }, { _id: false, vooId: true, mes: true, ano: true });
