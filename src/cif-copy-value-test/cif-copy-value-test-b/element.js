import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,
    ready: function () {
      console.log('Cubbles ready:', this);
    },
    modelAChanged: function (newValue) {
      this.$$('#slot-a').innerText = newValue;
    },
    modelBChanged: function (newValue) {
      this.$$('#slot-b').innerText = newValue;
    },
    modelCChanged: function (newValue) {
      this.$$('#slot-c').innerText = newValue;
    },
    modelDChanged: function (newValue) {
      this.$$('#slot-d').innerText = newValue;
    }
  });
}());
