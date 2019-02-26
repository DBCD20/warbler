const mongoose = require('mongoose');
const User = require('./user');

let messageSchema = new mongoose.Schema({
    text: String,
    required: true,
    maxLength: 160,
    user: {
        type: mongoose.Schema.type.ObjectId,
        ref: "User"
    }
});

messageSchema.pre('remove', async function(){
    try {
        let user = User.findById(this.user);
        user.messages.remove(this.id);
    
        await user.save();
    
        return next()
    }

    catch(err){
        return next(err)
    }
})

module.exports = mongoose.model("Message", messageSchema);