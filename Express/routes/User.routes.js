module.exports = app => {
    const users = require("../controller/User.controller.js");
  
    var router = require("express").Router();
  
    router.post("/create", users.create);
  
    router.get("/all", users.findAll);
  
    router.get("/:id", users.findById);
  
    router.put("/:id", users.update);
  
    router.delete("/:id", users.deleteById);
  
    router.delete("/all", users.deleteAll);
  
    app.use('/api/user', router);
  };