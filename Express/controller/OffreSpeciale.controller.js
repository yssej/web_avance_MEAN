const db = require("../model/server");
const OffreSpeciale = db.offreSpeciale;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.serviceConcerne || !req.body.promotion) {
      res.status(400).send({ message: "Le service et/ou la promotion ne doit être nulle!" });
      return;
    }
  
    const offreSpeciale = new OffreSpeciale({
      promotion: req.body.promotion,
      description: req.body.description,
      serviceConcerne: req.body.serviceConcerne,
      start: req.body.start,
      end:req.body.end
    });
  
    offreSpeciale
      .save(offreSpeciale)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erreur lors de la création de l'offre spéciale."
        });
      });
  };

exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    OffreSpeciale.find()
        .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Erreur lors de la récupération de tous les offres spéciales."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    OffreSpeciale.findById(id).then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Offre speciale with id " + id });
        else res.send(data);
    }).catch(err => {
        res
          .status(500)
          .send({ message: "Erreur lors de la récupération de l'offres spéciales with id=" + id });
    });
};

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "L'offre ne doit être nulle"
      });
    }
  
    const id = req.params.id;
  
    OffreSpeciale.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update OffreSpeciale with id=${id}. Maybe OffreSpeciale was not found!`
          });
        } else res.send({ message: "OffreSpeciale was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating OffreSpeciale with id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params._id;
  
    OffreSpeciale.findOneAndDelete(id)
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `Cannot delete OffreSpeciale with id=${id}. Maybe OffreSpeciale was not found!`
            });
            } else {
            res.send({
                message: "OffreSpeciale was deleted successfully!"
            });
            }
        })
        .catch(err => {
            res.status(500).send({
             message: "Could not delete OffreSpeciale with id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    OffreSpeciale.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} OffreSpeciales were deleted successfully!`
        });
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all OffreSpeciales."
        });
    });
};
