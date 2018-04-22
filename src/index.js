// import log from './log';
// import {warn, info} from "./utils";
import * as utils from './utils';

// log('helloo!');
utils.warn('warn!');

// require("./src/"), points to

// ./src/index.js
// ./src/index
// ./src/index.json

// require("lodsash") points to node_modules/lodash

//code splitting example:
const loadLog = () => import('./log');

setTimeout(() => {
        // load my log functionality
        loadLog().then(logModule => logModule.log("heeeeeeey"));
    }, 5000);