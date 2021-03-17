const showEmpresaAzul = { "empresa.nome": "AZUL" };
db.voos.find(showEmpresaAzul).limit(10).pretty();
