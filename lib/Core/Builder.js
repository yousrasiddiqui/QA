/**
 * Selenium Webdriver
 */
const { Builder, By, until, Keys } = require('selenium-webdriver');

var Core = function() {
    this.driver = new Builder()
        .forBrowser('chrome')
        .build();

    /**
     * Visit | This method will visit the url that given by the script then 
     * get the selinium driver to get that url to run on automate browser
     * 
     * @param String theUrl 
     * @returns 
     */
    this.visit = async function(theUrl) {
        await this.driver.manage().window().maximize();
        return await this.driver.get(theUrl);
    };

    /**
     * Navigate | This method will navigate the automate browser
     * 
     * @param String method 
     * @param String to | URL  
     * @returns 
     */
    this.navigate = async function(method, to) {

        if (method == 'forward') {
            return await this.driver.navigate().forward();
        } else if (method == 'back') {
            return await this.driver.navigate().back();
        } else if (method == 'refresh') {
            return await this.driver.navigate().refresh();
        } else {
            return await this.driver.navigate().to(to);
        }
    }

    /**
     * Quit | This method will run for quit the automate browser
     * 
     * @returns 
     */
    this.quit = async function() {
        return await this.driver.quit();
    };

    /**
     * Find By ID | This method using selenium driver for looking element and return the object of the element
     * 
     * @param String id 
     * @param Integer timeout 
     * @returns 
     */
    this.findById = async function(id, timeout) {
        await this.driver.wait(until.elementLocated(By.id(id)), timeout, 'Looking for Id element');
        return await this.driver.findElement(By.id(id));
    };

    /**
     * Find By Class | This method will get the selinium driver and get the element by 
     * waiting and looking for the class element to be visible and return the element of given class
     * 
     * @param String | className 
     * @param Integer | timeout 
     * @returns 
     */
    this.findByClass = async function(className, timeout) {
        await this.driver.wait(until.elementLocated(By.className(className)), timeout, 'Looking for class element');
        return await this.driver.findElement(By.className(className));
    };

    /**
     * Find By Link Text
     * 
     * @param String | linkText 
     * @param Integer | timeout 
     * @returns 
     */
    this.findByLinkText = async function(linkText, timeout) {
        await this.driver.wait(until.elementLocated(By.linkText(linkText)), timeout, 'Looking for link text element');
        return await this.driver.findElement(By.linkText(linkText));
    };

    /**
     * Find By Name
     * 
     * @param String | name 
     * @param Integer | timeout 
     * @returns 
     */
    this.findByName = async function(name, timeout) {
        await this.driver.wait(until.elementLocated(By.name(name)), timeout, 'Looking for name element');
        return await this.driver.findElement(By.name(name));
    };

    /**
     * Find By XPATH | This method is using selenium driver for looking xpath element and return the element object
     * 
     * @param String xpath 
     * @param Integer timeout 
     * @returns 
     */
    this.findByXpath = async function(xpath, timeout) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), timeout, 'Looking for xpath element');
        return await this.driver.findElement(By.xpath(xpath));
    };

    /**
     * Find By CSS Selector
     * 
     * @param String css 
     * @param Integer timeout 
     * @returns 
     */
    this.findByCss = async function(css, timeout) {
        await this.driver.wait(until.elementLocated(By.css(css)), timeout, 'Looking for CSS element');
        return await this.driver.findElement(By.css(css));
    };

    /**
     * Write | This method is for writing in element or input by getting the element from the selenium driver
     * 
     * @param Object el 
     * @param String txt 
     * @returns 
     */
    this.write = async function(el, txt) {
        return await el.sendKeys(txt);
    };
};

module.exports = Core;