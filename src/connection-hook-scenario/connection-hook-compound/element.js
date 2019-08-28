import './style.sss';

(function () {
  'use strict';
  document.addEventListener('cifReady', function () {
    var self = document.querySelector('/* @echo elementName */');
    self.classList.add('row');
    var childElements = self.children;
    for (var i = 0; i < self.childElementCount; i++) {
      var elem = childElements[i];
      const messageViewerName = '/* @echo webpackageName */-connection-hook-message-viewer';
      const messageViewerCompoundName = '/* @echo webpackageName */-connection-hook-message-viewer-compound';
      if (elem.tagName === messageViewerName.toUpperCase() || elem.tagName === messageViewerCompoundName.toUpperCase()) {
        elem.classList.add('col-md-3');
      }
    }
  });
}());
