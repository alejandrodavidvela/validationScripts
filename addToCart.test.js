//https://www.youtube.com/watch?v=r9HdJ8P6GQI

const puppeteer = require('puppeteer');
const waitTime = 20000;

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
  }

  test('Homepage works', async () => {
    const browser = await puppeteer.launch({
        headless: true,
    })
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/')
    await page.waitForSelector('h2.page-heading')
    const finalText = await page.$eval('.page-heading', el => el.textContent)
    expect(finalText).toContain('Featured Products')
    await browser.close().done;
}, waitTime)

test('Add tee 1 to cart', async () => {
    const browser = await puppeteer.launch({
        headless: true,
    })
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/sample-unisex-tee-navy/')
    await delay(2000);
    await page.waitForSelector('input.button--primary')
    page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    const finalText = await page.$eval('.modal-header-title', el => el.textContent)
    expect(finalText).toContain('1 item in your cart')
    await browser.close().done;
}, waitTime)

test('Add tee 2 to cart', async () => {
    const browser = await puppeteer.launch({
        headless: true
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/sample-ladies-tee-navy/')
    await page.setViewport({width:width, height:height})
    await delay(2000);
    await page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    const finalText = await page.$eval('.modal-header-title', el => el.textContent)
    expect(finalText).toContain('1 item in your cart')
    await browser.close().done;
}, waitTime)

test('Add tee 3 to cart', async () => {
    const browser = await puppeteer.launch({
        headless: true
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/sample-unisex-tee-white/')
    await page.setViewport({width:width, height:height})
    await delay(2000);
    await page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    const finalText = await page.$eval('.modal-header-title', el => el.textContent)
    expect(finalText).toContain('1 item in your cart')
    await browser.close().done;
}, waitTime)

test('Add tee 4 to cart', async () => {
    const browser = await puppeteer.launch({
        headless: true
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/sample-ladies-tee-white/')
    await page.setViewport({width:width, height:height})
    await delay(2000);
    await page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    const finalText = await page.$eval('.modal-header-title', el => el.textContent)
    expect(finalText).toContain('1 item in your cart')
    await browser.close().done;
}, waitTime)

test('Add mug to cart', async () => {
    const browser = await puppeteer.launch({
        headless: true
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/sample-mug-11-oz/')
    await page.setViewport({width:width, height:height})
    await delay(2000);
    await page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    const finalText = await page.$eval('.modal-header-title', el => el.textContent)
    expect(finalText).toContain('1 item in your cart')
    await browser.close().done;
}, waitTime)

test('Add button to cart', async () => {
    const browser = await puppeteer.launch({
        headless: true
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/sample-button-two-pack/')
    await page.setViewport({width:width, height:height})
    await delay(2000);
    await page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    const finalText = await page.$eval('.modal-header-title', el => el.textContent)
    expect(finalText).toContain('1 item in your cart')
    await browser.close().done;
}, waitTime)

test('Add stickers to cart', async () => {
    const browser = await puppeteer.launch({
        headless: true
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/sample-stickers-two-pack/')
    await page.setViewport({width:width, height:height})
    await delay(2000);
    await page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    const finalText = await page.$eval('.modal-header-title', el => el.textContent)
    expect(finalText).toContain('1 item in your cart')
    await browser.close().done;
}, waitTime)