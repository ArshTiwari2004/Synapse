// routes/quests.js
import express from 'express';
import Quest from '../models/quests.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const quests = req.body; 
      const createdQuests = await Quest.insertMany(quests); 
      res.status(201).json(createdQuests); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });  

router.get('/', async (req, res) => {
  try {
    const quests = await Quest.find(); 
    res.json(quests); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
