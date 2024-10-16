import mongoose from 'mongoose';

const socialMediaSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  facebook: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  linkedin: { type: String },
  google: { type: String },
  snapchat: { type: String },
});

export default mongoose.model('SocialMedia', socialMediaSchema);
