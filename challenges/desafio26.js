const showEmpresaGol = { "empresa.nome": "GOL" };
db.voos.deleteMany({
  $and: [showEmpresaGol, { "passageiros.pagos": { $gte: 5, $lte: 10 } }],
});
