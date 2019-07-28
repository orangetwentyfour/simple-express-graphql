import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 200
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model('User', UserSchema);
export default User;
