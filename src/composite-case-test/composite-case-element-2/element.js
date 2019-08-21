import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    connected: function () {
      this.setAttached({ values: [] });
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'message' has changed ...
     */
    modelMessageChanged: function (newValue) {
      this.model.attached.values.push(newValue);
      this.setAttached(this.getAttached());
    },

    modelAttachedChanged: function (newValue) {
      console.log(newValue);
      this.$.values.innerHTML = newValue.values.join(', ');
    }
  });
}());
