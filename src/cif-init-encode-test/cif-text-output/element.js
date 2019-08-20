import './style.sss';
import template from './element.html';

(function () {
  'use strict';

  CubxComponent({
    is: '/* @echo elementName */',
    template: template,

    modelTextChanged: function (value) {
      console.log(value);
      var content = this.$$('./* @echo elementName */_content');
      if (typeof value === 'string') {
        content.innerHTML = value.replace(/\\"/g, '"');
      } else if (typeof value === 'object') {
        content.innerHTML = JSON.stringify(value, null, 2).replace(/\\\\\\"/g, '"'); // Stringify encoded /"
      } else {
        content.innerHTML = value;
      }
    }

  });
}());
