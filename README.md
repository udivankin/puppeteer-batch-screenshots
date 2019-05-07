<h1 align="center">Puppeteer-batch-screenshots</h1>

<p align="center">Make screenshots of your websites in batch.</p>

<hr/>

<p>Tool based on <a href="https://github.com/GoogleChrome/puppeteer">puppeteer</a>.</p>

<h4>Installation</h4>

```shell
npm i -g puppeteer-batch-screenshots
```
<h3>Usage:</h3>

```shell
puppeteer-batch-screenshots config.json
```

<h3>Example config: </h3>

```json
[
  {
    "width": 1440,  // Viewport width, defaults to 1280
    "height": 900,  // Viewport height, defaults to 800
    "fullPage": false, // Whether it shoud make snapshot of the full page, regardless supplied height
    "emulate": "Nexus 4",  // Device to emulate, see full list in https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js
    "auth" : "username;password", // Auth username and password for HTTP basic auth
    "waitFor": 500, // Number in ms to wait for, or alternatively CSS selector (e.g. ".footer") to wait to appear
    "element": "#main", // CSS selector of element to take snapshot of
    "routes": [
      {
        "url": "http://example.com/1",
        "output": "./screenshots/example-1-${new Date().toISOString()}.png" // Output field is evaluated to enable template literals w/js code. Supported file extensions: PNG, JPEG/JPG and PDF
      }
    ]
  }
]
```

<h3>License</h3>

This project is licensed under the MIT License
