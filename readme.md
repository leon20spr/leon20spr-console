# console / leon20spr

With this middleware you can make your console more colourful.

## Installation

```
npm install @leon20spr/console
```

## Usage / ES6

```js
import console from "@leon20spr/console";

/**
 * To create a log
 */
console.log.create("This is a test log");
/**
 * To create a information
 */
console.information.create("This is a test information");
/**
 * To create a warning
 */
console.warning.create("This is a test warning");
/**
 * To create a error
 */
console.error.create("This is a test error");
```

## Usage / ES5

```js
const console = require("@leon20spr/console");

/**
 * To create a log
 */
console.log.create("This is a test log");
/**
 * To create a information
 */
console.information.create("This is a test information");
/**
 * To create a warning
 */
console.warning.create("This is a test warning");
/**
 * To create a error
 */
console.error.create("This is a test error");
```