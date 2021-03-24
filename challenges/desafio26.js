db.voos.deleteMany({ "empresa.sigla": "GLO", "passageiros.pagos": { $gte: 5, $lte: 10 } });
