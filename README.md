<h1 align="center">Puppeteer-batch-screenshots</h1>

<p align="center">Make screenshots of your websites in batch.</p>

<p>Let's say you have to make 100 web page screenshots in a row daily. The most of CLI-enabled screenshot tools allow you to make one single screenshot at a time, which means every time the new Node + Chrome instance gets initialised. This tool saves a good amount of time by batching these tasks.</p>

<hr/>

<p>Tool based on <a href="https://github.com/GoogleChrome/puppeteer">puppeteer</a>.</p>

<h3>Installation and Usage:</h3>

```shell
npm i -g puppeteer-batch-screenshots
puppeteer-batch-screenshots config.json
```

alternatively you can install it as a local dependency

```shell
mkdir my-perfect-screenshoot-tool && cd my-perfect-screenshoot-tool
npm init -y
npm i puppeteer-batch-screenshots
node ./node_modules/puppeteer-batch-screenshots/index.js config.json
```

<h3>Example config: </h3>

```js
[ // You can put multiple tasks here, each carrying custom settings
  {
    // Viewport width, defaults to 1280
    "width": 1440,
    // Viewport height, defaults to 800
    "height": 900,
    // Whether it shoud make screenshot of the whole page content
    "fullPage": false,
    // Device to emulate, see full list at
    // https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js
    "emulate": "Nexus 4",
    // Auth username and password for HTTP basic auth
    "auth" : "username;password",
    // Number in ms to wait for, or alternatively CSS selector (e.g. ".footer") to wait to appear
    "waitFor": 500,
    // CSS selector of element to take screenshot of
    "element": "#main",
    // Each task can have multiple routes
    "routes": [ 
      {
        // Web page URL
        "url": "http://example.com/1",
        // Output field is being evaluated to enable template literals
        // Supported file extensions: PNG, JPEG/JPG and PDF
        "output": "./screenshots/example-1-${new Date().toISOString()}.png" 
      }
    ]
  }
]
```

<h3>License</h3>

This project is licensed under the MIT License
