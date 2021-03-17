const showEmpresaAzul = { "empresa.nome": "AZUL" };
db.voos.deleteMany({
  $and: [
    showEmpresaAzul,
    {
      $and: [
        { litrosCombustivel: { $exists: true } },
        { litrosCombustivel: { $lt: 400 } },
      ],
    },
  ],
});
