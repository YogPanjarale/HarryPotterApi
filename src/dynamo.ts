import AWS from "aws-sdk";
import dotenv from 'dotenv';
import { Character } from "./types";
dotenv.config()

AWS.config.update({
    region:process.env.AWS_DEFAULT_REGION,
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
})
// console.log(AWS.config);


const dynamoClient = new AWS.DynamoDB.DocumentClient()
const TABLE_NAME="harrypotter-api"
export const getCharacters= async( ) => {
    const params:AWS.DynamoDB.DocumentClient.ScanInput = {
        TableName:TABLE_NAME,
    }
    const characters= await dynamoClient.scan(params).promise()
    console.log(characters);
    return characters
}

export const addOrUpdateCharacter= async (character:Character) => {
    const params:AWS.DynamoDB.DocumentClient.PutItemInput = {
        TableName:TABLE_NAME,
        Item:character
    }
    return await dynamoClient.put(params).promise() 
}

export const getCharacterById=async (id:string) => {
    const params = {
        TableName:TABLE_NAME,
        Key:{
            id
        }
    }
    return dynamoClient.get(params).promise()
}
export const deleteCharacterById=async (id:string) => {
    const params = {
        TableName:TABLE_NAME,
        Key:{
            id
        }
    }
    return dynamoClient.delete(params).promise()
}