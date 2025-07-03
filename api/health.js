export default function handler(req, res) {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Oura Health API Server is running on Vercel' 
  });
}