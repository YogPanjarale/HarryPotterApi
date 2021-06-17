console.log("Hello World 🚀");
import { getCharacters, addOrUpdateCharacter } from "./dynamo";
// import { addOrUpdateCharacter } from "./dynamo";
import { Character } from "./types";

getCharacters().then(d=>console.log(d)).catch(e=>console.error(e));

const hp: Character = {
    id:"0",
	name: "Harry Potter",
	species: "human",
	gender: "male",
	house: "Gryffindor",
	dateOfBirth: "31-07-1980",
	yearOfBirth: 1980,
	ancestry: "half-blood",
	eyeColour: "green",
	hairColour: "black",
	wand: {
		wood: "holly",
		core: "phoenix feather",
		length: 11,
	},
	patronus: "stag",
	hogwartsStudent: true,
	hogwartsStaff: false,
	actor: "Daniel Radcliffe",
	alive: true,
	image: "http://hp-api.herokuapp.com/images/harry.jpg",
};
addOrUpdateCharacter(hp).then(e=>console.log(e))