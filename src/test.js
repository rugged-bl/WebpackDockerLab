require('chromedriver');

const assert = require('assert');

const { Builder, Key, By, until } = require('selenium-webdriver');

describe('4 lab selenium mocha test', function () {
    let driver;    

	const testValues = async function(charactersCountE, wordsCountE, sentencesCountE) {       
	    const charactersCount = await driver.findElement(By.className('characters-value')).getText();
	    const wordsCount = await driver.findElement(By.className('words-value')).getText();
	    const sentencesCount = await driver.findElement(By.className('sentences-value')).getText();
		
		assert.equal(charactersCount, 'Количество символов в тексте: ' + charactersCountE);
		assert.equal(wordsCount, 'Количество слов в тексте: ' + wordsCountE);
		assert.equal(sentencesCount, 'Количество предложений в тексте: ' + sentencesCountE);
	};
	
	before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
		
		await driver.get('file:///C:/Development/mirea/WebpackDockerLab/dist/index.html');
    }); 
	
	it('should correctly append', async function() {
		await driver.findElement(By.id('textarea')).sendKeys('asd');
        await testValues(3, 1, 0);
		
		await driver.findElement(By.id('textarea')).sendKeys('. as');
		await testValues(7, 2, 1);
    });
	
	it('then should correctly remove', async function() {
		await driver.findElement(By.id('textarea')).sendKeys('\b');
        await testValues(6, 2, 1);
		
		await driver.findElement(By.id('textarea')).sendKeys('\b');
		await testValues(5, 1, 1);
    });
	
	it('should count sentences', async function() {
		await driver.findElement(By.id('textarea')).clear();
		await driver.findElement(By.id('textarea')).sendKeys('asd. asd. asd. .');

        await testValues(16, 4, 4);
    });
	
	
    after(() => driver && driver.quit());
})