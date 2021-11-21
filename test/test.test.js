const { describe, it, after, before } = require('mocha');

const GoogleLanding = require('../lib/Module/GoogleLanding');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function AgentTicket() {
    try {
        describe('Google Automate Searching', async function() {
            this.timeout(50000);
            let driver, page;

            before(async() => {
                pageObject = new GoogleLanding();
                driver = pageObject.driver;
                await pageObject.visit('https://www.google.com');
            });

            after(async() => {
                await pageObject.quit();
            });

            it('Searching in google', async() => {
                /**
                 * Open first ticket and wait to next test case
                 */
                const result = await pageObject.search();
                expect(result).to.be.true;
            });
        });
    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})();