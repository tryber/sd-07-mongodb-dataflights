db.voos.find(
  { vooId: 756807 },
  { _id: 0, "empresa.nome": true, "empresa.sigla": true, passageiros: true },
);
