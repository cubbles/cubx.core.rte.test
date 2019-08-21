import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,
    ready: function () {
      console.log('polymer ready:', this);
      this.$$('#slot-a').innerText = this.getA();
      this.$$('#slot-b').innerText = this.getB();
      this.$$('#slot-c').innerText = this.getC();
      this.$$('#slot-d').innerText = this.getD();
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
