module.exports = mongoose => {
    const MobileMoney = mongoose.model(
      "mobileMoney",
      mongoose.Schema(
        {
            user:{ idUser:String, username:String},
            operateurNom:String,
            monnaie:String
        },
        { timestamps: true }
      )
    );
  
    return MobileMoney;
};