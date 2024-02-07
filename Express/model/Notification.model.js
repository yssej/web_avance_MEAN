module.exports = mongoose => {
    const Notification = mongoose.model(
      "notification",
      mongoose.Schema(
        {
          destinataire: { idUser:String, username:String},
          notification: String,
          serviceConcerne: {idService:String, nom:String, prix:Number},
          remarque:String,
          temps:Date,
          isSent:Boolean,
          isRead:Boolean
        },
        { timestamps: true }
      )
    );
  
    return Notification;
};