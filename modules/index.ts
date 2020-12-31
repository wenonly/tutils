const version: string = require("../package.json").version;

export { version };

// functoin
export { default as debounce } from "./debounce";
export { default as throttle } from "./throttle";
export { default as clone } from "./clone";
export { default as cloneDeep } from "./cloneDeep";
export { default as dateToString } from "./dateToString";
export { default as filterRichLabel } from "./filterRichLabel";
