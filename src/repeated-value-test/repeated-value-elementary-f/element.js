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

    },

    /**
     *  Observe the Cubixx-Component-Model: If value for slot 'a' has changed ...
     */
    modelClickedChanged: function (newValue) {
      // update the view
      this.addNewButtonClick();
    },
    addNewButtonClick: function () {
      var dateTime = new Date();
      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      var dateTimeString = dateTime.toLocaleTimeString('de-DE', options);
      var message = 'clicked: ' + dateTimeString;
      var article = document.createElement('article');
      article.innerHTML = message;
      this.$.messages.appendChild(article);
    }
  });
}());
