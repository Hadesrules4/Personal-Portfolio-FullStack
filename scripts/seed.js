import 'dotenv/config';
import mongoose from 'mongoose';
import Project from '../backend/models/Project.js';
import Skill from '../backend/models/Skill.js';

const projects = [
  { title: 'Phishing Email Detection Model', description: 'Machine-learning application that classifies email text as phishing or safe using Scikit-learn.', technologies: ['Python', 'Scikit-learn', 'NLP', 'Machine Learning'], githubUrl: 'https://github.com/Hadesrules4/Phishing-Email-Detection-Model', featured: true },
  { title: 'Password Strength Analyzer', description: 'Security utility that evaluates password length, character diversity and common weakness patterns.', technologies: ['Python', 'Cybersecurity', 'Regex'], githubUrl: 'https://github.com/Hadesrules4/Password-Strength-Analyzer', featured: true },
  { title: 'Vulnerability Scanner', description: 'Educational defensive scanner for checking common network ports and generating a simple report.', technologies: ['Python', 'Networking', 'Cybersecurity'], githubUrl: 'https://github.com/Hadesrules4/Vulnerability-Scanner', featured: false },
  { title: 'AI Cybersecurity Threat Detection', description: 'Planned advanced project combining machine learning, network telemetry and explainable threat detection.', technologies: ['Python', 'AI/ML', 'Cybersecurity', 'XAI'], githubUrl: 'https://github.com/Hadesrules4', featured: true }
];
const skills = [
  { name: 'Python', category: 'Programming', level: 85 },
  { name: 'JavaScript', category: 'Programming', level: 75 },
  { name: 'React', category: 'Web', level: 70 },
  { name: 'Node.js', category: 'Web', level: 70 },
  { name: 'MongoDB', category: 'Database', level: 65 },
  { name: 'Machine Learning', category: 'AI/ML', level: 75 },
  { name: 'Cybersecurity', category: 'Security', level: 75 },
  { name: 'Git/GitHub', category: 'Tools', level: 80 }
];

await mongoose.connect(process.env.MONGO_URI);
await Project.deleteMany({});
await Skill.deleteMany({});
await Project.insertMany(projects);
await Skill.insertMany(skills);
console.log('Database seeded successfully.');
await mongoose.disconnect();
