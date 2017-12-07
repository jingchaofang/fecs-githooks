/**
 * @file command line interface
 * @author cxtom <cxtom2010@gmail.com>
 */

// eslint-disable no-console

var minimist = require('minimist');
var path = require('path');
var fs = require('fs');
var Util = require('./util');

/**
 * 显示指定命令的帮助
 *
 * @param {string} cmd 命令名
 */
function displayHelp() {
    console.log('process \'fecs-githook init\' or \'fecs-githook disable\'');
}

/**
 * 显示 package.json 中的版本号
 */
function displayVersion() {
    var pkg = require('../package');
    console.log('%s %s', pkg.name, pkg.version);
}

exports.disable = function () {
    var filePath = path.resolve(process.cwd(), '.git/hooks/pre-commit');
    fs.unlink(filePath, function (error) {
        if (error !== null) {
            console.log('并未执行初始化\n' + error);
            process.exit(1);
        }

        console.log('OK！');
    });
};

exports.init = function () {
    Util.installHooks('pre-commit');
};

/**
 * 命令行参数处理
 *
 * @return {void} 无返回
 */
exports.parse = function () {
    var options = exports.getOptions(process.argv.slice(2));

    if (options.version) {
        return displayVersion();
    }

    if (options.help) {
        return displayHelp();
    }

    exports[options.command]();
};

/**
 * 获取命令行参数集对象
 *
 * @param  {[type]} argv 命令参数数组 ［‘－v’］
 * @return {Object}      参数集合对象 {_:[], help:false, h:false, version:true, v:true}
 */
exports.getOptions = function (argv) {
    var options = minimist(
        argv,
        {
            'boolean': ['help', 'version'],
            'string': ['_'],
            'default': {},
            'alias': {
                h: 'help',
                v: 'version'
            }
        }
    );
    var cmd = options._[0];

    if (cmd === 'init' || cmd === 'disable') {
        cmd = options._.shift();
        options.command = cmd;
    }
    else if (cmd !== undefined) {
        console.log('unsupported option');
        process.exit(1);
    }

    return options;
};
