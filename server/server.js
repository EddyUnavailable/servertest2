// import express, { response, response } from "express";
import express from "express";
import cors from "cors";

const app = express();
// app.use(express.json());
app.use(cors());
const PORT = process.env.port || 3000;


app.listen(PORT, () => console.log(`server is now listening on port${PORT}`));


const URL = 'https://uselessfacts.jsph.pl/random.json'
fetch(URL, {
    category: {
        "Animals": "Random Animals",
    },
})
.then((resonse) => resonse.json())
.then(data => {
    console.log(data)
})
  
// (async() => {
//     const response = await fetch(`https://quotes.toscrape.com/random`)
//     const body = await response.text()
//     console.log(body)
// })()

//   app.get(URL, (request, response) => {
//     response.json(URL);
//   });
  
//   app.listen(3000, () => console.log("Woop! App is running in 8080!"));