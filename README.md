<h1 align="center">Puppeteer-batch-screenshots</h1>

<p align="center">Make screenshots of your websites in batch.</p>

<hr/>

<p>Tool based on <a href="https://github.com/GoogleChrome/puppeteer">puppeteer</a>.</p>

<h4>Installation </h4>

```shell
npm i -g puppeteer-batch-screenshots
```
<h3>Usage:</h3>

```shell
puppeteer-batch-screenshots config.json
```

<h4>Example config: </h4>

```json
[
  {
    "width": 1440,
    "height": 900,
    "emulate": null,
    "auth" : null,
    "waitFor": null,
    "waitForSelector": null,
    "element": null,
    "routes": [
      {
        "url": "http://example.com/1",
        "output": "./screenshots/example-1-${new Date().toISOString()}.png"
      }
    ]
  }
]
```

<p> List of of supported mobile devices: https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js
</p>

<h3>License</h3>

This project is licensed under the MIT License
