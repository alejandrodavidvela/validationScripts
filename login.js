//Code from Justin

const   inquirer = require('inquirer'),
        logIt = require('./logIt'),
        elements = require('../config/elements'),
        pauseAmt = 3000;
module.exports = async (currentStore, page) => {
  try {
    await page.goto("https://login.bigcommerce.com/login");
    await page.$(elements.loginPage.userEmailInput);
    // Enter credentials and attempt log in
    logIt('app', "Logging into BigCommerce...");
    await page.type(elements.loginPage.userEmailInput, currentStore.email);
    await page.type(elements.loginPage.userPasswordInput, currentStore.pass);
    await page.click(elements.loginPage.userLoginSubmit).then(() => page.waitForNavigation({waitUntil: 'load'}));
    // If authentication required, prompt user for code then proceed
    let needsUserAuth = await page.$(elements.userAuth.authCodeInput);
    while (needsUserAuth) {
      logIt('app', "Login authentication code required");
      const userRes = await inquirer.prompt({
        type: "input",
        name: "bcVerifyCode",
        message: "Enter authentication code:",
      });
      await page.type(elements.userAuth.authCodeInput, userRes.bcVerifyCode);
      await page.click(elements.userAuth.authCodeSubmit).then(() => page.waitForTimeout(pauseAmt));
      needsUserAuth = await page.$(elements.userAuth.authCodeInput);
    }
  
    logIt('app', "Login successful.");
  } catch (err) {
    logIt('app', err);
  }
}





loginPage: {
      userEmailInput: '#user_email',
      userPasswordInput: '#user_password',
      userLoginSubmit: '.login-form-button'
    },
    userAuth: {
      authCodeInput: '#device_verification_otp_code',
      authCodeSubmit: 'input[name="commit"]' 
    }
}