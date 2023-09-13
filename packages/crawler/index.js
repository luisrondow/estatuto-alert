import express from 'express';
import crawler from './src/crawler.js';
const app = express();
const PORT = 3030;

app.get('/', (req, res) => {
  res.send('Server running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/start-crawler', async (req, res) => {
  try {
      const data = await crawler();

      const response = await sendDataToAPI(data);
      res.json({ success: true, message: response });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
});