module.exports = mongoose => {
    const RendezVous = mongoose.model(
      "rendezVous",
      mongoose.Schema(
        {
            serviceAsked:{ idService:String, nom:String, prix:Number },
            start:Date,
            end:Date,
            client: { idUser:String, username:String},
            employe: { idUser:String, username:String},
            isConfirmed:Boolean,
            isDone:Boolean
        },
        { timestamps: true }
      )
    );
  
    return RendezVous;
};