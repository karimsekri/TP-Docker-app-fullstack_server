import express, { Request } from "express";
import dotenv from "dotenv/config";

import cors from 'cors';
import bodyParser from "body-parser"

const app = express();
app.use(cors());
app.use(bodyParser.json());

const myport = process.env.PORT ? parseInt(process.env.PORT as string) : 3000;

app.get("/hello", async (_, res) => {    
    
    //res.send renvoi du text    
    res.send("Hello");   
});

app.get("/server/time", async (_, res) => {    
    
    const time = Date.now();
    const now = new Date(time);
    const Heure = now.getHours().toString();
    const Minute = now.getMinutes().toString();
    const Seconde = now.getSeconds().toString();
    
    //res.send renvoi du text    
    res.send(`${Heure}:${Minute}:${Seconde}`);   
});


app.listen( myport, () =>
  console.log(`Server is listening on port ${myport}`)
);