import express, { response } from "express";
import cors from "cors";
const app = express();
app.use(express.json());
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log("server listening on port:", port);
});

app.get("/status", (request, response) => {
    const status = {
        "status": "running"
    };

    response.send(status);
});

app.get('https://uselessfacts.jsph.pl/random.json', async (req, res) => {
    // want fetch my jokes from my SQL TABLE
    // result is a big JSON object that has a bunch of data on it
    const result = await db.query(`SELECT * FROM jokes`)
    // we only care about the 'rows' part of the result
    const jokes = result.rows
    res.json(jokes)
})
    

