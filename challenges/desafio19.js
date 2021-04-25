db.voos.find({ litrosCombustivel: { $exists: true } }, { _id: 0, vooId: true }).limit(1);
