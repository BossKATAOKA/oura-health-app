/**
 * Health Check API
 * サーバーの動作確認用エンドポイント
 */
module.exports = (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Oura Health Dashboard API is running on Vercel',
    timestamp: new Date().toISOString()
  });
};