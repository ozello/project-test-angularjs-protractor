var yaml = require('js-yaml');
var fs = require('fs');

var readYaml = function (yamlFile) {
  return JSON.parse(JSON.stringify(yaml.load(fs.readFileSync('./input/' + yamlFile, {encoding: 'utf-8'}))));
};

module.exports = readYaml;