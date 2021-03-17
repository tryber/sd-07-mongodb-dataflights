db.voos.findOne({
  litrosCombustivel: {
    $lte: 600,
    $exists: true,
  },
  $nor: [{
    $or: [{
      "empresa.nome": "GOL",
    }, {
      "empresa.nome": "AZUL",
    }],
  }],
}, {
  _id: 0,
  "empresa.nome": 1,
  litrosCombustivel: 1,
  vooId: 1,
});
