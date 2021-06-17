import axios from 'axios';
import {addOrUpdateCharacter}from './dynamo';
import { Character } from './types';

export const seedData= async ()=>{
    const url='http://hp-api.herokuapp.com/api/characters';
    try{
        const {data:characters}=await axios.get(url)
         const characterPromises  = characters.map((character: Character,i: number)=>
             addOrUpdateCharacter({...character,id:i+""})
         )
         await Promise.all(characterPromises);
    }catch (error){
        console.error(error);
        console.log("Ehhh");
        
    }
}