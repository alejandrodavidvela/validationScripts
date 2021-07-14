// https://www.youtube.com/watch?v=wsDRkAD6lPs

const puppeteer = require('puppeteer');
const waitTime = 20000;


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
  }

test('Login User Check works', async () => {
    const browser = await puppeteer.launch({
        headless: true,
    })
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/login.php')
    await page.waitForSelector('h1.page-heading')
    await page.type('input[id=login_email]', 'avela@bumperactive.com', {delay: 20})
    await page.type('input[id=login_pass]', 'Testing123!', {delay: 20})
    page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    await page.waitForSelector('h1.page-heading')
    const finalText = await page.$eval('h1.page-heading', el => el.textContent)
    expect(finalText).toContain('Orders')
    await browser.close().done;
}, waitTime)