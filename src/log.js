import {metalog} from "./metalog";

export function log(message) {
    metalog('log', message);
    console.log(message);
}
