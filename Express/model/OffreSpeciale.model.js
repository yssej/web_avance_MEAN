const ServiceModel = require("./Service.model");

module.exports = mongoose => {
    const OffreSpeciale = mongoose.model(
      "offreSpeciale",
      mongoose.Schema(
        {
          promotion: Number,
          description: String,
          serviceConcerne: {idService:String, nom:String, prix:Number},
          start:Date,
          end:Date
        },
        { timestamps: true }
      )
    );
  
    return OffreSpeciale;
};