/**
 * Markdown Helper {{markdown}}
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';

// http://jaketrent.com/post/every-nth-item-in-handlebars-loop/
var _ = require('lodash');


module.exports.register = function (Handlebars, options, params) {

  Handlebars.registerHelper('everyNth', function(context, every, options) {
    var fn = options.fn, inverse = options.inverse;
    var ret = "";
    if(context && context.length > 0) {
      for(var i=0, j=context.length; i<j; i++) {
        var modZero = i % every === 0;
        ret = ret + fn(_.extend({}, context[i], {
          isModZero: modZero,
          isModZeroNotFirst: modZero && i > 0,
          isLast: i === context.length - 1
        }));
      }
    } else {
      ret = inverse(this);
    }
    return ret;
  });

}