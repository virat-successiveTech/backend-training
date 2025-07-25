import { Router } from 'express';
import country from '../models/country';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const countries = await country.find({});
    res.json(countries);
  } catch (err) {
    console.error('Error fetching countries:', err); // Log full error
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});



router.post('/', async (req, res) => {
  try {
    const { name } = req.body;

    // Simple validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ error: 'Country name is required and must be a non-empty string' });
    }

    
    const existing = await country.findOne({ name: name.trim() });
    if (existing) {
      return res.status(409).json({ error: 'Country already exists' });
    }

    
    const newCountry = new country({ name: name.trim() });
    await newCountry.save();

    res.status(201).json(newCountry);
  } catch (err) {
    console.error('Error creating country:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;

