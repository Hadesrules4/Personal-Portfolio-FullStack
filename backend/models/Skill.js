import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  category: { type: String, default: 'Other', trim: true },
  level: { type: Number, min: 0, max: 100, default: 70 }
}, { timestamps: true });

export default mongoose.model('Skill', skillSchema);
