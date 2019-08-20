import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,
    ready: function () {
      this.$.slota.setAttribute('value', this.getA());
      this.$.slotb.setAttribute('value', this.getB());
      this.$.slotc.setAttribute('value', this.getC());
      this.$.slotd.setAttribute('value', this.getD());

      this.$.slota.addEventListener('change', this.changeAHandler.bind(this));
      this.$.slotb.addEventListener('change', this.changeBHandler.bind(this));
      this.$.slotc.addEventListener('change', this.changeCHandler.bind(this));
      this.$.slotd.addEventListener('change', this.changeDHandler.bind(this));
    },
    changeAHandler: function (event) {
      this.setA(event.target.value);
    },
    changeBHandler: function (event) {
      this.setB(event.target.value);
    },
    changeCHandler: function (event) {
      this.setC(event.target.value);
    },
    changeDHandler: function (event) {
      this.setD(event.target.value);
    },
    modelAChanged: function () {
      this.$.slota.setAttribute('value', this.getA());
    },
    modelBChanged: function () {
      this.$.slotb.setAttribute('value', this.getB());
    },
    modelCChanged: function () {
      this.$.slotc.setAttribute('value', this.getC());
    },
    modelDChanged: function () {
      this.$.slotd.setAttribute('value', this.getD());
    }
  });
}());
