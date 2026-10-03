import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  technologies: [{ type: String, trim: true }],
  githubUrl: { type: String, default: '' },
  liveUrl: { type: String, default: '' },
  image: { type: String, default: '' },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
