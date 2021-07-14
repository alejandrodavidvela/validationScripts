// https://www.youtube.com/watch?v=wsDRkAD6lPs

const puppeteer = require('puppeteer');
const waitTime = 10000000;


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
  }

test('Checkout as guest with 2 items works', async () => {
    const browser = await puppeteer.launch({
        headless: true,
    })
    const width = 1650;
    const height = 1050;
    const page = await browser.newPage();
    //go to mug page
    await page.goto('http://localhost:3000/sample-mug-11-oz/')
    await page.setViewport({width:width, height:height})
    await delay(2000);
    //add mug to cart
    await page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    //go to tee page
    await page.goto('http://localhost:3000/sample-unisex-tee-navy/')
    await delay(2000);
    //add tee to cart
    await page.waitForSelector('input.button--primary')
    page.click('input.button--primary', {waitUntil: 'load'})
    await delay(2000);
    //go to cart page
    await page.goto('http://localhost:3000/cart.php')
    await delay(2000);
    //click checkout button
    await page.waitForSelector('a.button--primary')
    page.click('a.button--primary', {waitUntil: 'load'})
    await delay(2000);
    //enter email in email address field
    await page.waitForSelector('input[id=email]')
    await page.type('input[id=email]', 'test@test.com', {delay: 20})
    //click continue button
    page.click('button.optimizedCheckout-buttonPrimary', {waitUntil: 'load'})
    await delay(2000);
    //enter shipping information
    await page.waitForSelector('input[id=firstNameInput]')
    await page.type('input[id=firstNameInput]', 'Alex', {delay: 20})
    await page.type('input[id=lastNameInput]', 'Vela', {delay: 20})
    await page.type('input[id=phoneInput]', '512-555-5555', {delay: 20})
    await page.type('input[id=addressLine1Input]', '1234 Burnet Rd', {delay: 20})
    await page.type('input[id=cityInput]', 'Austin', {delay: 20})
    // TODO create input for country dropdown
    await page.click('select[id=countryCodeInput]')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    // TODO create input for state dropdown
    await page.click('select[id=provinceCodeInput]')
    await page.keyboard.press('T')
    await page.keyboard.press('T')
    await page.keyboard.press('Enter')
    await page.type('input[id=postCodeInput]', '78741', {delay: 20})
    await page.type('input[id=field_26Input]', 'Bumperactive', {delay: 20})
    await page.type('input[id=field_28Input]', 'Developer', {delay: 20})
    // TODO create input for I certify dropdown
    await page.keyboard.press('Tab')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    //click continue button
    await delay(4000);
    page.click('button.optimizedCheckout-buttonPrimary', {waitUntil: 'load'})
    await delay(16000);
    await page.keyboard.press('Tab')
    //enter credit card info
    //await page.waitForSelector('input[id=ccNumber]')
    await page.type('input[name=ccNumber]', '4111111111111111', {delay: 20})
    await page.type('input[id=ccExpiry]', '1225', {delay: 20})
    await page.type('input[id=ccName]', 'success', {delay: 20})
    await page.type('input[id=ccCvv]', '345', {delay: 20})
    //click continue button
    page.click('button.optimizedCheckout-buttonPrimary', {waitUntil: 'load'})
    await delay(3000);
    //cehck that page says Thank you
    await page.waitForSelector('h1.optimizedCheckout-headingPrimary')
    const finalText = await page.$eval('h1.optimizedCheckout-headingPrimary', el => el.textContent)
    expect(finalText).toContain('Thank you')
    await browser.close().done;
}, waitTime)