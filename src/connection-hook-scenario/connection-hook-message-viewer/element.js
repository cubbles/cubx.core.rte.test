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
      this.$.message.addEventListener('input', this.inputHandler.bind(this));
    },

    inputHandler: function (event) {
      this.setMessage(event.target.value);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'a' has changed ...
     */
    modelMessageChanged: function (newValue) {
      this.$.message.setAttribute('value', newValue);
    }
  });
}());
