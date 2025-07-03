const axios = require('axios');

const OURA_API_BASE_URL = 'https://api.ouraring.com/v2/usercollection';

class OuraService {
  constructor() {
    this.baseURL = OURA_API_BASE_URL;
  }

  async makeRequest(endpoint, accessToken, params = {}) {
    try {
      const response = await axios.get(`${this.baseURL}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        params
      });
      return response.data;
    } catch (error) {
      throw new Error(`Oura API request failed: ${error.response?.data?.detail || error.message}`);
    }
  }

  async getSleepData(accessToken, date) {
    const params = {};
    if (date) {
      params.start_date = date;
      params.end_date = date;
    }
    return await this.makeRequest('/daily_sleep', accessToken, params);
  }

  async getActivityData(accessToken, date) {
    const params = {};
    if (date) {
      params.start_date = date;
      params.end_date = date;
    }
    return await this.makeRequest('/daily_activity', accessToken, params);
  }

  async getHeartrateData(accessToken, date) {
    const params = {};
    if (date) {
      params.start_date = date;
      params.end_date = date;
    }
    return await this.makeRequest('/heartrate', accessToken, params);
  }

  async getPersonalInfo(accessToken) {
    return await this.makeRequest('/personal_info', accessToken);
  }

  async getReadinessData(accessToken, date) {
    const params = {};
    if (date) {
      params.start_date = date;
      params.end_date = date;
    }
    return await this.makeRequest('/daily_readiness', accessToken, params);
  }
}

module.exports = new OuraService();