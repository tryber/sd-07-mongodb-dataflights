db.voos.find({ vooId: 756807 }, { "empresa.sigla": 1, "empresa.nome": 1, _id: 0, "passageiros.pagos": 1, "passageiros.gratis": 1 });
