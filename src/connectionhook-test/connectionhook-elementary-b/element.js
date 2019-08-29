import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,

    /**
     * Manipulate an element’s local DOM when the element is constructed.
     */
    ready: function () {
      this.$.slota.innerText = this.getA() || '';
      this.$.slotb.innerText = this.getB() || '';
      this.$.slotcname.innerText = this.getC() && this.getC().name ? this.getC().name : '';
    },
    modelAChanged: function (newValue) {
      // update the view
      this.$.slota.innerText = newValue;
    },
    modelBChanged: function (newValue) {
      // update the view
      this.$.slotb.innerText = newValue;
    },
    modelCChanged: function (newValue) {
      // update the view
      this.$.slotcname.innerText = newValue.name;
    }
  });
}());
