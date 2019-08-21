import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,
    ready: function () {
      this.$.slota.innerText = this.getA().value;
      this.$.slotb.innerText = this.getB().value;
      this.$.slotc.innerText = this.getC().value;
      this.$.slotd.innerText = this.getD().value;

      this.$$('[for="slota"]').innerText = this.getA().label;
      this.$$('[for="slotb"]').innerText = this.getB().label;
      this.$$('[for="slotc"]').innerText = this.getC().label;
      this.$$('[for="slotd"]').innerText = this.getD().label;
    },
    modelAChanged: function (newValue) {
      this.$.slota.innerText = newValue.value;
      this.$$('[for="slota"]').innerText = newValue.label;
    },
    modelBChanged: function (newValue) {
      this.$.slotb.innerText = newValue.value;
      this.$$('[for="slotb"]').innerText = newValue.label;
    },
    modelCChanged: function (newValue) {
      this.$.slotc.innerText = newValue.value;
      this.$$('[for="slotc"]').innerText = newValue.label;
    },
    modelDChanged: function (newValue) {
      this.$.slotd.innerText = newValue.value;
      this.$$('[for="slotd"]').innerText = newValue.label;
    }
  });
}());
