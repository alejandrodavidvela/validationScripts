//https://www.youtube.com/watch?v=r9HdJ8P6GQI

const puppeteer = require('puppeteer');
const waitTime = 15000;

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
  }

// test('About us link works', async () => {
//     const browser = await puppeteer.launch({
//         headless: true,
//     })
//     const width = 1650;
//     const height = 1050;
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/')
//     await page.setViewport({width:width, height:height})
//     //const heading1 = await page.$eval("body > footer > div > section > article > ul > li > a ", el => el.textContent);
//     await page.click('.footer-info-list-item', {waitUntil: 'load'})
//     await page.waitForSelector('h1.page-heading')
//     const finalText = await page.$eval('h1.page-heading', el => el.textContent)
//     expect(finalText).toContain('About Us')
//     await browser.close().done;
// }, waitTime)

test('About us link works', async () => {
    const browser = await puppeteer.launch({
        headless: true,
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/')
    await page.setViewport({width:width, height:height})
    //const heading1 = await page.$eval("body > footer > div > section > article > ul > li > a ", el => el.textContent);
    // await page.click('.footer-info-list-item', {waitUntil: 'load'})
    await page.click('.footer-info-list > li:nth-child(1)')
    await delay(2000);
    const finalText = await page.$eval('h1.page-heading', el => el.textContent)
    expect(finalText).toContain('About Us')
    await browser.close().done;
}, waitTime)

test('FAQ link works', async () => {
    const browser = await puppeteer.launch({
        headless: true,
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/')
    await page.setViewport({width:width, height:height})
    //const heading1 = await page.$eval("body > footer > div > section > article > ul > li > a ", el => el.textContent);
    // await page.click('.footer-info-list-item', {waitUntil: 'load'})
    await page.click('.footer-info-list > li:nth-child(2)')
    await delay(2000);
    const finalText = await page.$eval('h1.page-heading', el => el.textContent)
    expect(finalText).toContain('FAQ')
    await browser.close().done;
}, waitTime)

test('Apparel link works', async () => {
    const browser = await puppeteer.launch({
        headless: true,
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/')
    await page.setViewport({width:width, height:height})
    //const heading1 = await page.$eval("body > footer > div > section > article > ul > li > a ", el => el.textContent);
    // await page.click('.footer-info-list-item', {waitUntil: 'load'})
    await page.click('.footer-info > article:nth-child(2) > .footer-info-list > li:nth-child(1)')
    await delay(2000);
    const finalText = await page.$eval('h1.page-heading', el => el.textContent)
    expect(finalText).toContain('Apparel')
    await browser.close().done;
}, waitTime)

test('Goods link works', async () => {
    const browser = await puppeteer.launch({
        headless: true,
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/')
    await page.setViewport({width:width, height:height})
    //const heading1 = await page.$eval("body > footer > div > section > article > ul > li > a ", el => el.textContent);
    // await page.click('.footer-info-list-item', {waitUntil: 'load'})
    await page.click('.footer-info > article:nth-child(2) > .footer-info-list > li:nth-child(2)')
    await delay(2000);
    const finalText = await page.$eval('h1.page-heading', el => el.textContent)
    expect(finalText).toContain('Goods')
    await browser.close().done;
}, waitTime)