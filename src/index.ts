import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import { getCharacterById, getCharacters } from './dynamo';

const app = express()

app.get('/',(_req,res)=>{
    res.send("Hello World!")
})
app.get('/characters',async(_req,res)=>{
    try{
        const characters = await getCharacters()
        res.json(characters)
    }catch(error){
        console.error(error);
        res.status(500).json({"error":"Some thing went wrong :("})
    }
})
app.get('/characters/:id',async(req,res)=>{
    const id =req.params.id
    try{
        const character = await getCharacterById(id)
        res.json(character)
    }catch(error){
        console.error(error);
        res.status(500).json({"error":"Some thing went wrong :("})
    }
})
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Express App listening on http://localhost:${port}`);
    
})
