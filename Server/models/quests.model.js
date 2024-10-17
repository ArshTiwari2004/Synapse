import mongoose from 'mongoose';

const questSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
  type: { type: String, required: true },
  points: { type: Number, required: true },
  completed: { type: Boolean, default: false },
  location: { type: [Number], default: undefined }, 
});

const Quest = mongoose.model('Quest', questSchema);

export default Quest;
