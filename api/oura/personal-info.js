const axios = require('axios');

const OURA_API_BASE_URL = 'https://api.ouraring.com/v2/usercollection';

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    
    if (!accessToken) {
      return res.status(401).json({ error: 'Access token required' });
    }

    const response = await axios.get(`${OURA_API_BASE_URL}/personal_info`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ 
      error: `Oura API request failed: ${error.response?.data?.detail || error.message}` 
    });
  }
};