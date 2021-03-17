db.voos.findOne({
  litrosCombustivel: {
    $exists: true,
    $lte: 1000,
  },
}, {
  _id: 0,
  litrosCombustivel: 1,
  vooId: 1,
});
