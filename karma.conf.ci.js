module.exports = function (config) {
    'use strict';
    if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
        console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
        process.exit(1);
    }

    // Commented some of these out just so CI doesn't take forever.
    // Check out https://saucelabs.com/platforms for all browser/platform combos
    var customLaunchers = {
        //slIOS7: {
        //    base: 'SauceLabs',
        //    browserName: 'iPhone',
        //    platform: 'OS X 10.9',
        //    version: '7.1'
        //},
        slIOS8: {
            base: 'SauceLabs',
            browserName: 'iPhone',
            platform: 'OS X 10.9',
            version: '8.1'
        },
        //slAndroid4: {
        //    base: 'SauceLabs',
        //    browserName: 'Android',
        //    platform: 'Linux',
        //    version: '4.4'
        //},
        slChrome: {
            base: 'SauceLabs',
            browserName: 'chrome'
        },
        slFirefox: {
            base: 'SauceLabs',
            browserName: 'firefox'
        },
        //slSafari6: {
        //    base: 'SauceLabs',
        //    browserName: 'safari',
        //    platform: 'OS X 10.8',
        //    version: '6'
        //},
        //slSafari7: {
        //    base: 'SauceLabs',
        //    browserName: 'safari',
        //    platform: 'OS X 10.9',
        //    version: '7'
        //},
        //slSafari8: {
        //    base: 'SauceLabs',
        //    browserName: 'safari',
        //    platform: 'OS X 10.10',
        //    version: '8'
        //}
        slOpera: {
            base: 'SauceLabs',
            browserName: 'opera'
        },
        //slIE11: {
        //    base: 'SauceLabs',
        //    browserName: 'internet explorer',
        //    platform: 'Windows 8.1',
        //    version: '11'
        //},
        slIE10: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 8',
            version: '10'
        }
        //slIE9: {
        //    base: 'SauceLabs',
        //    browserName: 'internet explorer',
        //    platform: 'Windows 7',
        //    version: '9'
        //}
    };

    config.set({
        basePath: '',
        frameworks: ['jasmine', 'sinon'],
        files: [
            'node_modules/stackframe/stackframe.js',
            'build/source-map-consumer.js',
            'node_modules/es6-promise/dist/es6-promise.js',
            'stacktrace-gps.js',
            'spec/*-spec.js'
        ],
        exclude: [],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browserDisconnectTimeout : 10000,
        browserDisconnectTolerance : 1,
        browserNoActivityTimeout : 240000,
        captureTimeout : 240000,
        sauceLabs: {
            testName: 'stacktrace-gps unit tests',
            recordScreenshots: false,
            connectOptions: {
                port: 5757,
                logfile: 'sauce_connect.log'
            }
        },
        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers),
        reporters: ['progress', 'saucelabs', 'coverage'],
        preprocessors: {
            'stacktrace-gps.js': 'coverage'
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage'
        },
        singleRun: true
    });
};
