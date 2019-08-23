import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,
    ready: function () {
      this.$.slota.setAttribute('value', this.getA().value);
      this.$.slotb.setAttribute('value', this.getB().value);
      this.$.slotc.setAttribute('value', this.getC().value);
      this.$.slotd.setAttribute('value', this.getD().value);

      this.$$('[for="slota"]').innerText = this.getA().label;
      this.$$('[for="slotb"]').innerText = this.getB().label;
      this.$$('[for="slotc"]').innerText = this.getC().label;
      this.$$('[for="slotd"]').innerText = this.getD().label;

      this.$.slota.addEventListener('input', this.changeAHandler.bind(this));
      this.$.slotb.addEventListener('input', this.changeBHandler.bind(this));
      this.$.slotc.addEventListener('input', this.changeCHandler.bind(this));
      this.$.slotd.addEventListener('input', this.changeDHandler.bind(this));
    },
    changeAHandler: function (event) {
      var a = {
        label: this.getA().label,
        value: event.target.value
      };
      this.setA(a);
    },
    changeBHandler: function (event) {
      var b = {
        label: this.getB().label,
        value: event.target.value
      };
      this.setB(b);
    },
    changeCHandler: function (event) {
      var c = {
        label: this.getC().label,
        value: event.target.value
      };
      this.setC(c);
    },
    changeDHandler: function (event) {
      var d = {
        label: this.getD().label,
        value: event.target.value
      };
      this.setD(d);
    },
    modelAChanged: function () {
      this.$.slota.setAttribute('value', this.getA().value);
      this.$$('[for="slota"]').innerText = this.getA().label;
    },
    modelBChanged: function () {
      this.$.slotb.setAttribute('value', this.getB().value);
      this.$$('[for="slotb"]').innerText = this.getB().label;
    },
    modelCChanged: function () {
      this.$.slotc.setAttribute('value', this.getC().value);
      this.$$('[for="slotc"]').innerText = this.getC().label;
    },
    modelDChanged: function () {
      this.$.slotd.setAttribute('value', this.getD().value);
      this.$$('[for="slotd"]').innerText = this.getD().label;
    }
  });
}());
