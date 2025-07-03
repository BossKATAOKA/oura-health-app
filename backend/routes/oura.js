const express = require('express');
const router = express.Router();
const ouraService = require('../services/ouraService');

router.get('/sleep/:date?', async (req, res) => {
  try {
    const { date } = req.params;
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    
    if (!accessToken) {
      return res.status(401).json({ error: 'Access token required' });
    }
    
    const sleepData = await ouraService.getSleepData(accessToken, date);
    res.json(sleepData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/activity/:date?', async (req, res) => {
  try {
    const { date } = req.params;
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    
    if (!accessToken) {
      return res.status(401).json({ error: 'Access token required' });
    }
    
    const activityData = await ouraService.getActivityData(accessToken, date);
    res.json(activityData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/heartrate/:date?', async (req, res) => {
  try {
    const { date } = req.params;
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    
    if (!accessToken) {
      return res.status(401).json({ error: 'Access token required' });
    }
    
    const heartrateData = await ouraService.getHeartrateData(accessToken, date);
    res.json(heartrateData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/personal-info', async (req, res) => {
  try {
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    
    if (!accessToken) {
      return res.status(401).json({ error: 'Access token required' });
    }
    
    const personalInfo = await ouraService.getPersonalInfo(accessToken);
    res.json(personalInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;