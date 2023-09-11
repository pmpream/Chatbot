const express = require('express');
const bodyParser = require('body-parser');
const addConversationHistory = require('./addConversationHistory');
const { connectToDatabase } = require('./database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', addConversationHistory);

app.post('/webhook', async (req, res) => {
  let intent = req.body.queryResult.intent.displayName;
  let text = req.body.queryResult.queryText;

  try {
    const connection = await connectToDatabase();
    const result = await addConversationHistory(connection, intent, text);
    console.log(result.datetime, result.message, '=>', 'Intent:', intent, 'Text:', text, );
    res.json({});
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3000, '127.0.0.1', () => {
  console.log('Webhook is running on port 3000');
});
