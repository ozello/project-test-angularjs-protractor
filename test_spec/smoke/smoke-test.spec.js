var logger = require('../../conf/logConfig');
var jsonReader = require('../../util/read-yaml');
var fields = jsonReader('smoke-test.yaml');

describe('First example to a smoke test', function () {
  it('Insert a value in a list', function () {

    logger.info('Geting url: ' + fields.test1.url);
    browser.get(fields.test1.url);

    logger.info('Put text: ' + fields.test1.input.value);
    element(by.model(fields.test1.input.selector)).sendKeys(fields.test1.input.value);
    element.all(by.className(fields.test1.button.selector)).get(4).click();

  });
});