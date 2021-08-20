import mongoose from 'mongoose'
const { Schema, model } = mongoose;


const postSchema = Schema({


    text: String,
    date: { type: Date, default: Date.now },

    user: { type: Schema.Types.ObjectId, ref: 'User' }
});
const userSchema = Schema({


    // name: String,
    email: String,
    name: String
})

// module.exports = Post = mongoose.model('post', postSchema)
//const Post = mongoose.model('Post', postSchema);
const User = mongoose.model('User', userSchema);

export default User
