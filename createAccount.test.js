// https://www.youtube.com/watch?v=wsDRkAD6lPs

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
    await page.goto('http://localhost:3000/login.php?action=create_account')
    await page.waitForSelector('h1.page-heading')
    await page.type('input[id=FormField_1_input]', 'test@test.com', {delay: 20})
    await page.type('input[id=FormField_2_input]', 'test123', {delay: 20})
    await page.type('input[id=FormField_3_input]', 'test123', {delay: 20})
    await page.type('input[id=FormField_4_input]', 'Test First Name', {delay: 20})
    await page.type('input[id=FormField_5_input]', 'Test Last Name', {delay: 20})
    await page.type('input[id=FormField_7_input]', '512-555-5555', {delay: 20})
    await page.type('input[id=FormField_8_input]', '1234 Burnet Rd', {delay: 20})
    await page.type('input[id=FormField_10_input]', 'Austin', {delay: 20})
    await page.type('input[id=FormField_12_input]', 'Texas', {delay: 20})
    await page.type('input[id=FormField_13_input]', '78741', {delay: 20})
    await page.type('input[id=FormField_26_input]', 'Test Company', {delay: 20})
    await page.type('input[id=FormField_28_input]', 'Test Job', {delay: 20})
    await browser.close().done;
}, waitTime)