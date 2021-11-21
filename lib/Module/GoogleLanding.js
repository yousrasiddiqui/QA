let PageObject = require('../Core/Builder');


/**
 * This method will open the chat window tab
 * @returns Boolean
 */
PageObject.prototype.search = async function() {

    await this.driver.sleep(1000);

    searchInputField = await this.findByXpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input', 9000);
    await this.write(searchInputField, 'Selenium Tutorial');

    return await this.driver.wait(async function() {
        return await true;
    });
};

// Module Exports the inherited Page
module.exports = PageObject;