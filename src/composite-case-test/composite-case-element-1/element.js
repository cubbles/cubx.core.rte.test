import './style.sss';
import template from './element.html';

(function () {
  'use strict';
  CubxComponent({
    is: '/* @echo elementName */',
    template: template,

    ready: function () {
      this.$.message.setAttribute('value', this.getMessage());
      this.$.message.addEventListener('change', this.inputFieldMessageChanged.bind(this));
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    connected: function () {
      this.setAttached({ values: [] });
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputFieldMessageChanged: function (event) {
      // update the cubbles-model
      this.setMessage(event.target.value);
    },

    modelMessageChanged: function (newValue) {
      // update the view
      this.$.message.setAttribute('value', newValue);
      this.model.attached.values.push(newValue);
      this.setAttached(this.getAttached());
    },

    modelAttachedChanged: function (newValue) {
      console.log(newValue);
      this.$.values.innerHTML = newValue.values.join(', ');
    }
  });
}());
