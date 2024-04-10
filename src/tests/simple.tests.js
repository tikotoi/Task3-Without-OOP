describe("Test suite 3", async () => {
  beforeEach(async () => {
    await browser.url("https://cloud.google.com/");
  });

  it("Google Cloud Pricing Calculator", async () => {

    //Search "Google Cloud Platform Pricing Calculator"
    await $(".YSM5S").click();
    await $("#i4").setValue("Google Cloud Platform Pricing Calculator");
    await $(".google-material-icons.PETVs.PETVs-OWXEXe-UbuQg").click();
    //await $$(".K5hUy")[1].click();
    await $("//a[@href='https://cloud.google.com/products/calculator-legacy?hl=es-419']").click();

    //Switch to iframe
    const iframe = await browser.findElements('css selector', 'iframe')
    await browser.pause(3000);
    await browser.switchToFrame(iframe[0]);
    const iframe1 = await browser.findElements('css selector', 'iframe')
    await browser.switchToFrame(iframe1[0]);

    await $("#input_100").setValue(4);
    await $('#select_113').click();
    await $("#select_option_102").waitForDisplayed();
    await $("#select_option_102").click();
    await $("#select_117").click();
    await $("#select_option_115").click();
    await $("#select_123").click()
    await $("#select_option_119").click();
    await $("#select_125").click();
    await $("#select_option_224").waitForDisplayed();
    await $("#select_option_224").click();
    await $("#select_127").click();
    await $("#select_option_474").waitForDisplayed();
    await $("#select_option_474").click();

    // Add GPUs 
    await $$(".md-container.md-ink-ripple")[2].click();
    await $("#select_510").click();
    await $("#select_option_517").waitForDisplayed();
    await $("#select_option_517").click();
    await $("#select_512").click();
    await $("#select_option_520").waitForDisplayed();
    await $("#select_option_520").click();
    await $("#select_469").click();
    await $("#select_option_495").waitForDisplayed();
    await $("#select_option_495").click();
    await $("#select_133").click();
    await $("#select_option_268").waitForDisplayed();
    await $("#select_option_268").click();
    await $("#select_140").click();
    await $("#select_option_138").waitForDisplayed()
    await $("#select_option_138").click()
    await $$(".md-raised.md-primary.cpc-button.md-button.md-ink-ripple")[0].waitForDisplayed();
    await $$(".md-raised.md-primary.cpc-button.md-button.md-ink-ripple")[0].click();
    await $$(".md-title")[3].waitForDisplayed();
    const totalCost = await $$(".md-title")[3].getText();

    // Email Estimate
    await $$(".md-fab.md-primary.md-mini.md-button.md-ink-ripple")[1].waitForDisplayed();
    await $$(".md-fab.md-primary.md-mini.md-button.md-ink-ripple")[1].click();

    //Generate Email
    
    await browser.newWindow('https://email-fake.com/');
    const  copyMail = await $('#email_ch_text').getText();

    // Add Email to Calculator window 
    await browser.switchWindow('cloud.google.com/products/calculator-legacy');
    const iframe0 = await browser.findElements('css selector', 'iframe')
    await browser.pause(3000);
    await browser.switchToFrame(iframe0[0]);
    const iframe2 = await browser.findElements('css selector', 'iframe')
    await browser.switchToFrame(iframe2[0]);
    await $("#input_620").waitForDisplayed();
    await $("#input_620").click();
    await $("#input_620").setValue(copyMail);
    await $$(".md-raised.md-primary.cpc-button.md-button.md-ink-ripple")[4].waitForDisplayed();
    await $$(".md-raised.md-primary.cpc-button.md-button.md-ink-ripple")[4].click();
  
    //Get Total price from email
    await browser.switchWindow("https://email-fake.com")
    await browser.pause(5000)
    const total = await $("h2").getText();
    console.log(total);

    //Compare prices
    const price = total.slice(24);
    const resultOfPrice = totalCost.includes(price);
    console.log(resultOfPrice);

    await browser.pause(1000);
    //await browser.switchToFrame(null);
  });

});
