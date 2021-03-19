db.voos.find({ litrosCombustivel: { $gt: 1000 } }, { vooId: true, _id: false }).limit(1);
