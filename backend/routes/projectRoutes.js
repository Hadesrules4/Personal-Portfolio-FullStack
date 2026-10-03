import { Router } from 'express';
import Project from '../models/Project.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/', async (_req, res) => {
  try { res.json(await Project.find().sort({ featured: -1, createdAt: -1 })); }
  catch { res.status(500).json({ message: 'Failed to load projects' }); }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch { res.status(400).json({ message: 'Invalid project id' }); }
});

router.post('/', requireAuth, async (req, res) => {
  try { res.status(201).json(await Project.create(req.body)); }
  catch (e) { res.status(400).json({ message: e.message }); }
});

router.put('/:id', requireAuth, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (e) { res.status(400).json({ message: e.message }); }
});

router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch { res.status(400).json({ message: 'Invalid project id' }); }
});

export default router;
