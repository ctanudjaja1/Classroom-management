import express from 'express'

const app = express();
const PORT = 8000;

const router = express.Router();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});