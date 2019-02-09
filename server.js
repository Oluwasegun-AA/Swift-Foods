import express from 'express';
import path from 'path';
import cors from 'cors';

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname)));
app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
