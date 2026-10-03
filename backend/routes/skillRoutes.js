import { Router } from 'express';
import Skill from '../models/Skill.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
router.get('/', async (_req, res) => {
  try { res.json(await Skill.find().sort({ category: 1, name: 1 })); }
  catch { res.status(500).json({ message: 'Failed to load skills' }); }
});
router.post('/', requireAuth, async (req, res) => {
  try { res.status(201).json(await Skill.create(req.body)); }
  catch (e) { res.status(400).json({ message: e.message }); }
});
router.put('/:id', requireAuth, async (req, res) => {
  try { res.json(await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })); }
  catch (e) { res.status(400).json({ message: e.message }); }
});
router.delete('/:id', requireAuth, async (req, res) => {
  try { await Skill.findByIdAndDelete(req.params.id); res.json({ message: 'Skill deleted' }); }
  catch { res.status(400).json({ message: 'Invalid skill id' }); }
});
export default router;
