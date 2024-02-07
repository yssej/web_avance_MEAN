module.exports = mongoose => {
    const Preference = mongoose.model(
      "preference",
      mongoose.Schema(
        {
            client: { idUser:String, username:String},
            service:{idService:String, nom:String, prix:Number},
            employe: { idUser:String, username:String},
            compteurServ:Number,
            compteurEmp:Number
        },
        { timestamps: true }
      )
    );
  
    return Preference;
};