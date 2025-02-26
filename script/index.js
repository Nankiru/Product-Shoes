import { Render } from "../components/Render.js";
import { heroes } from "../data/heroes.js";

let render = document.querySelector("#render");

heroes.map((hero)=>(render.innerHTML+= Render(hero)));