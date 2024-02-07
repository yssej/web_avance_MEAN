module.exports = mongoose => {
    const Rappel = mongoose.model(
      "rappel",
      mongoose.Schema(
        {
            employe: { idUser:String, username:String },
            client: { idUser:String, username:String },
            moment:Date,
            note:String
        },
        { timestamps: true }
      )
    );
  
    return Rappel;
};