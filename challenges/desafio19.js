db.getCollection("voos").find({ litrosCombustivel: { $exists: true } }, { vooId: true, _id: 0 }).limit(1);
