db.voos.findOne({ litrosCombustivel: { $lt: 600, $exists: true },
  $nor: [
    { "empresa.nome": { $eq: "GOL" } },
    { "empresa.nome": { $eq: "AZUL" } },
  ],
}, {
  _id: false,
  vooId: true,
  litrosCombustivel: true,
  "empresa.nome": true,
});
