module.exports = mongoose => {
    const Service = mongoose.model(
      "service",
      mongoose.Schema(
        {
            nom:String,
            prix:Number,
            dureeMinute:Number,
            commission:Number
        },
        { timestamps: true }
      )
    );
  
    return Service;
};