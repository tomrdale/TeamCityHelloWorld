var appRouter = function(app) {

  app.get("/", function(req, res){
    res.send(index.html);
  });
  
};

module.exports = appRouter;