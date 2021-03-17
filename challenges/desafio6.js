const showVooId756807 = { vooId: 756807 };
db.voos
  .find(showVooId756807, {
    "empresa.sigla": 1,
    "empresa.nome": 1,
    passageiros: 1,
    _id: 0,
  })
  .pretty();
