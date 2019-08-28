import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      this.$.slota.setAttribute('value', this.getA());

      this.$.slota.addEventListener('input', this.inputHandler.bind(this));
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputHandler: function (event) {
      this.setA(event.target.value);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'a' has changed ...
     */
    modelAChanged: function (newValue) {
      // update the view
      this.$.slota.setAttribute('value', newValue);
    }
  });
}());
