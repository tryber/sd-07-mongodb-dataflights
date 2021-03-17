const showEmpresaGol = { "empresa.nome": "GOL" };
const showEmpresaAzul = { "empresa.nome": "AZUL" };
db.voos
  .find(
    {
      $and: [
        {
          $and: [
            { litrosCombustivel: { $exists: true } },
            { litrosCombustivel: { $lt: 600 } },
          ],
        },
        {
          $nor: [showEmpresaGol, showEmpresaAzul],
        },
      ],
    },
    { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 },
  )
  .limit(1)
  .pretty();
