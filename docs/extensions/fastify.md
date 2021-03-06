# Fastify plugin

This is very similar to the [express](./express) extension and provides the same features but in a slightly different way. Rather than passing the options (for custom format) when creating your logger instance, you pass another options object when registering the plugin.

## Installation

`npm i leekslazylogger-fastify`

## Usage

```js
// set up logger with options
const FastifyLogger = require('leekslazylogger-fastify');
const log = new FastifyLogger({
	name: 'My fastify server', // regular options such as custom types
});

// require fastify
const fastify = require('fastify')();

// use logger plugin
fastify.register(log.fastify);
// OR
fastify.register(log.fastify, {
	format: '{method} &7{path}' // optional
});

...
// other plugins and router
...

// start server
fastify.listen(8080);
```

## Screenshot

![image](https://i.imgur.com/1anKOAc.png)

## Options

FastifyLogger takes the [same options as normal](/customisation/options/):

```js
const log = new FastifyLogger({
	name: 'My fastify server'
});
```

And the fastify plugin also takes options:

```js
fastify.register(log.fastify, {
	format: '{method} &7{path}'
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
- `{route}`: fastify route name (eg: `/users/:id`)
- `{path}`: Full path (no query)
- `{status-colour}` / `{status-color}`: green/orange/blue/red colour code based on status code (to prefix status)
- `{status}`: status code (200, 301, 404 etc)
- `{time-colour}` / `{time-color}`: light green/yellow/red colour code based on time (to prefix time)
- `{time}`: time in ms for request to be completed
