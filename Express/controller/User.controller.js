const db = require("../model/server");
const User = db.user;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.role) {
      res.status(400).send({ message: "Aucun champ ne doit être laissé pour nulle!" });
      return;
    }
  
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    });
  
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erreur lors de la création de l'user."
        });
      });
  };

exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    User.find()
        .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Erreur lors de la récupération de tous les uilisateurs."
        });
    });
};

exports.findById = (req, res) => {
    const id = req.params.id;
  
    User.findById(id).then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with id " + id });
        else res.send(data);
    }).catch(err => {
        res
          .status(500)
          .send({ message: "Erreur lors de la récupération de l'user with id=" + id });
    });
};

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "L'user ne doit être nulle"
      });
    }
  
    const id = req.params.id;
  
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
};

exports.deleteById = (req, res) => {
    const id = req.params._id;
  
    User.findOneAndDelete(id)
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
            } else {
            res.send({
                message: "User was deleted successfully!"
            });
            }
        })
        .catch(err => {
            res.status(500).send({
             message: "Could not delete User with id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    User.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Users were deleted successfully!`
        });
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Users."
        });
    });
};
