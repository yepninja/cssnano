'use strict';

import plugin from '../plugin';

let targets = ['ie 8'];

export default plugin(targets, ['atrule'], function (rule) {
    var params = rule.params.trim();
    if (params === '\\0screen') {
        this.push(rule, `Bad media query: ${params}`);
    }
});