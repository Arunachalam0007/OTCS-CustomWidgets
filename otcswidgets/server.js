var http = require('http'),
    connect = require('connect'),
    morgan = require('morgan'),
    cors = require('cors'),
    serveStatic = require('serve-static'),
    serveIndex = require('serve-index');

var host = process.env.otcswidgets_HOST || '0.0.0.0',
    browserHost = host === '0.0.0.0' ? 'localhost' : host,
    port = parseInt(process.env.otcswidgets_PORT || 7777, 10);

var server = connect()
    .use(morgan('short'))
    .use(cors())
    .use(serveStatic('.', {etag: false}))
    .use(serveIndex('.'));

console.log('Starting web server at http://' + browserHost + ':' + port);
http.createServer(server)
    .listen(port, host);
