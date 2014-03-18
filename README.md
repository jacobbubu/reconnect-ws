
# reconnect-ws

Reconnect a [websocket stream](https://github.com/maxogden/websocket-stream) when it goes down.

## Usage

```js
var reconnect = require('reconnect-ws');

// this is the server
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});
wss.on('connection', function(ws) {
  ws.send('Hello, client!');
});

// this is the client
reconnect(function (stream) {
  stream.on('data', console.log);
  // => yup, I'm up!
}).connect(8080)
```

See [example.js](./example.js) for detailed usage.

For the events you can listen to, see
[reconnect-core](https://github.com/juliangruber/reconnect-core#usage).

## Installation

With [npm](https://npmjs.org) do:

```
npm install reconnect-ws
```

## License

(MIT)

Copyright (c) 2013 Rong Shen &lt;rongshen@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
