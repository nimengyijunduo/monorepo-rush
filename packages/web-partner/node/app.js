const express = require('express');
const http = require('http');
const path = require('path');
const nunjucks = require('nunjucks');
const history = require('connect-history-api-fallback');
const main = require('./controllers/index');

const app = express();

/** 设置模板引擎 */
app.set('trust proxy', true);
nunjucks.configure(path.join(__dirname, '../dist'), {
    autoescape: true,
    express: app,
});
app.set('view engine', 'html');

/** 处理单页应用路由 */
app.use(history());

app.use('/', main);

app.use(express.static(`${path.resolve(__dirname, '../dist')}`));

const server = http.createServer(app);
server.listen(5173, () => {});
