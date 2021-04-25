db.voos.deleteMany(
  {
    "empresa.nome": "AZUL",
    litrosCombustivel: { $lt: 400 },
  },
  {
    "empresa.nome": true,
    litrosCombustivel: true,
    _id: false,
  },
);
