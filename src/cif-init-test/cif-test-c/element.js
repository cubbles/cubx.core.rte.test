import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,
    ready: function () {
      this.$.slotout.setAttribute('value', this.getOut());
      this.$.slotout.addEventListener('change', this.changeOutHandler.bnd(this));
    },
    changeOutHandler: function (event) {
      this.setOut(event.target.value);
    },
    modelOutChanged: function () {
      this.$.slotout.setAttribute('value', this.getOut());
    }
  });
}());
