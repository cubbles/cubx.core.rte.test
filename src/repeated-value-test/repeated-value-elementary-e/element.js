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
      this.$.click.addEventListener('click', this.clickHandler.bind(this));
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    clickHandler: function (event) {
      // update the cubixx-model
      this.setClicked(true);
    }
  });
}());
