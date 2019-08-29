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
      // set value-attribute of element with id='slota' to the initial value of slot 'a'
      this.$.slota.setAttribute('value', this.getA());
      this.$.slotb.setAttribute('value', this.getB());
      this.$.slotcName.setAttribute('value', this.getC().name);
      this.$.slotcFirstName.setAttribute('value', this.getC().firstname);

      this.$.slota.addEventListener('input', this.inputFieldSlotAChanged.bind(this));
      this.$.slotb.addEventListener('input', this.inputFieldSlotBChanged.bind(this));
      this.$.slotcName.addEventListener('input', this.inputFieldSlotSlotcNameChanged.bind(this));
      this.$.slotcFirstName.addEventListener('input', this.inputFieldSlotSlotcFirstNameChanged.bind(this));
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputFieldSlotAChanged: function (event) {
      // update the cubixx-model
      this.setA(event.target.value);
    },
    inputFieldSlotBChanged: function (event) {
      // update the cubixx-model
      this.setB(event.target.value);
    },

    inputFieldSlotSlotcNameChanged: function (event) {
      var c = this.getC();
      c.name = event.target.value;
      this.setC(c);
    },
    inputFieldSlotSlotcFirstNameChanged: function (event) {
      var c = this.getC();
      c.firstname = event.target.value;
      this.setC(c);
    },
    modelAChanged: function (newValue) {
      // update the view
      this.$.slota.setAttribute('value', newValue);
    },
    modelBChanged: function (newValue) {
      // update the view
      this.$.slotb.setAttribute('value', newValue);
    },
    modelCChanged: function (newValue) {
      // update the view
      this.$.slotcName.value = newValue.name;
      this.$.slotcFirstName.value = newValue.firstname;
    }
  });
}());
