const showAzul = { "empresa.nome": /AZUL/ };
db.voos.find(showAzul).limit(10);
