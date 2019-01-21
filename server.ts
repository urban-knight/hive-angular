import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { createWindow } from 'domino';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Enable server-side browser functionality 
const template = readFileSync(join(process.cwd(), 'dist', 'browser', 'index.html')).toString();
const _window : Window = createWindow(template);

global['window'] = _window;
global['window'].$ = global['window'].jQuery = require("jquery");
console.log(_window);
global['document'] = _window.document;
// global['DOMTokenList'] = _window.DOMTokenList;
// global['Node'] = _window.Node;
// global['Text'] = _window.Text;
// global['HTMLElement'] = _window.HTMLElement;
const MockBrowser = require('mock-browser').mocks.MockBrowser;
const mock = new MockBrowser();


global['navigator'] = mock.getNavigator();
// global['navigator'] = _window.navigator;
global['MutationObserver'] = getMockMutationObserver();

function getMockMutationObserver() {
    return class {
        observe(node, options) { }
        disconnect() { }
        takeRecords() { return []; }
    };
}

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', (_, options, callback) => {
    renderModuleFactory(AppServerModuleNgFactory, {
      // Our index.html
      document: template,
      url: options.req.url,
      // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
      extraProviders: [
        provideModuleMap(LAZY_MODULE_MAP)
      ]
    }).then(html => {
      callback(null, html);
    });
  });

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
    res.status(404).send('data requests are not supported');
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
});
