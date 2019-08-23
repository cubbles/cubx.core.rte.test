import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,

    contextReady: function () {
      this.showRuntimeId();
      this.$.message.addEventListener('input', this.changeMessageHandler.bind(this));
    },
    changeMessageHandler: function (event) {
      this.setMessage(event.target.value);
    },
    showRuntimeId: function () {
      console.log('this.getRuntimeId()', this.getRuntimeId());
      if (this.getRuntimeId()) {
        var p = document.createElement('p');
        p.innerHTML = '<b>runtimeId</b><br>' + this.getRuntimeId();
        var h1 = this.$$('h1');
        this.$$(`.${this.is}_container`).insertBefore(p, h1.nextElementSibling);
      } else {
        console.log('no runtimeId found');
      }
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'slotA' has changed ...
     */
    modelMessageChanged: function (newValue) {
      this.$.message.setAttribute('value', newValue);
    }
  });
}());
