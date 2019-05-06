const fs = require('fs-extra')
const path = require('path');
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const tasks = require(path.resolve(process.argv.pop()));

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 800;

(async () => {
  try {
    await execute();
  } catch(e) {
    console.error(e);
    process.exit(1);
  }

  async function execute() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    for (const task of tasks) {
      const {
        height,
        width,
        fullPage,
        emulate,
        auth,
        waitFor,
        waitForSelector,
        element,
        routes,
      } = task;

      if (width || height) {
        await page.setViewport({
          width: width || DEFAULT_WIDTH,
          height: height || DEFAULT_HEIGHT,
        })        
      }

      if (emulate) {
        await page.emulate(devices[emulate]);
      }

      for (const route of routes) {
        const { url, output } = route;
        const outputPath = eval('`' + output + '`');

        try {
          if (auth) {
            const [username, password] = auth.split(';');
            await page.authenticate({ username, password });
          }
  
          await page.goto(url);
  
          if (waitFor) {
            await page.waitFor(waitFor);
          }
  
          if (waitForSelector) {
            await page.waitForSelector(waitForSelector);
          }
  
          await fs.ensureDir(path.dirname(path.resolve(outputPath)));

          if (element) {
            const el = await page.$(element);
            await el.screenshot({ path: path.resolve(outputPath) });
          } else {
            await page.screenshot({ path: path.resolve(outputPath), fullPage });
          }
  
          console.log(`Saved ${url} screenshot to ${outputPath}`);
        } catch(e) {
          console.error(`Failed to make ${url} screenshot to ${outputPath}`);
        }
      }
    }

    await browser.close();
  }
})();
