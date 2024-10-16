import mongoose from 'mongoose';

const googleUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  googleId: { type: String },
});

const GoogleUser = mongoose.model('GoogleUser', googleUserSchema);

export default GoogleUser;