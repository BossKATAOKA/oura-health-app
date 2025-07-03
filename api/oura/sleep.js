import axios from 'axios';

const OURA_API_BASE_URL = 'https://api.ouraring.com/v2/usercollection';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    
    if (!accessToken) {
      return res.status(401).json({ error: 'Access token required' });
    }

    const { date } = req.query;
    const params = {};
    if (date) {
      params.start_date = date;
      params.end_date = date;
    }

    const response = await axios.get(`${OURA_API_BASE_URL}/daily_sleep`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      params
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ 
      error: `Oura API request failed: ${error.response?.data?.detail || error.message}` 
    });
  }
}