# Express middleware

## Installation

`npm i leekslazylogger-express`

## Usage

```js
// set up logger with options
const ExpressLogger = require('leekslazylogger-express');
const log = new ExpressLogger({
	name: 'My express server', // regular options such as custom types
	express: {
		format: '{method} &7{path}' // optional
	}
});

// require express
const express = require('express');
const app = express();

// use logger middleware
app.use(log.express);

...
// other middleware and router
...

// start server
app.listen(8080);
```

The ```app.use(log.express);``` must be one of the first middleware, before the routing.

## Screenshot

![image](https://i.imgur.com/1anKOAc.png)

## Options

ExpressLogger takes the [same options as normal](/customisation/options/), as well as an `express` object:

```js
const log = new ExpressLogger({
	express: {
		format: ''
	}
});
```

### Format

The default format is:
`{method} {status-colour}{status} &7{path} {time-colour}({time})`

The string **can** include [colour codes](/colours/#leeksjs-short-codes).

#### Placeholders

The available placeholders for setting your own format are:

- `{method}`: GET/POST etc
- `{protocol}`: HTTP or HTTPS
- `{route}`: express route name (eg: `/users/:id`)
- `{path}`: Full path (no query)
- `{status-colour}` / `{status-color}`: green/orange/blue/red colour code based on status code (to prefix status)
- `{status}`: status code (200, 301, 404 etc)
- `{time-colour}` / `{time-color}`: light green/yellow/red colour code based on time (to prefix time)
- `{time}`: time in ms for request to be completed
