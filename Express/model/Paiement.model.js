module.exports = mongoose => {
    const Paiement = mongoose.model(
      "paiement",
      mongoose.Schema(
        {
          montant:Number,
          motif: String,
          moment: Date,
          rendezVous: {idRDV:String, start:Date},
          montant:Number,
          operateur:String
        },
        { timestamps: true }
      )
    );
  
    return Paiement;
};