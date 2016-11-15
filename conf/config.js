exports.config = {

  directConnect: true,

  multiCapabilities: [{
    browserName: 'chrome'
  }
    // ,{
    //   browserName: 'firefox'
    // }
  ],

  framework: 'jasmine2',

  //specs: ['../test_spec/functional/func-test.spec.js'],
  suites: {
    smoke: ['../test_spec/smoke/*.spec.js'],
    regression: ['../test_spec/regression/*.spec.js'],
    functional: ['../test_spec/functional/*.spec.js'],
    all: ['../test_spec/*/*.spec.js'],
    selected: ['../test_spec/functional/func-test.spec.js'/*,
      '../test_spec/regression/regr-test.spec.js',
      '../test_spec/smoke/smoke-test.spec.js'*/
    ]
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  }
};