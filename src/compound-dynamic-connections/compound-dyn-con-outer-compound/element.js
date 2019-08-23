import './style.sss';

/* globals _ */
(function () {
  'use strict';
  document.addEventListener('cifReady', function () {
    document.querySelector('/* @echo elementName */').classList.add('row');
    var inners = document.querySelectorAll('/* @echo webpackageName*/-compound-dyn-con-inner-compound');
    var count = inners.length + 1;
    if (count < 6) {
      document.querySelector('/* @echo elementName */').classList.add('row');
      var className = 'col-md-' + Math.floor(12 / count);
      _.each(inners, function (elem) {
        elem.classList.add(className);
        var div = document.createElement('div');
        var html = '<b>runtimeId</b> <br>';
        html += elem.getRuntimeId();
        div.innerHTML = html;
        elem.appendChild(div);
      });
      var div = document.createElement('div');
      var html = '<p>';
      html += '<b>runtimeId</b> <br>';
      html += document.querySelector('/* @echo elementName */').getRuntimeId();
      html += '</p>';
      div.innerHTML = html;
      div.classList.add(className);
      document.querySelector('/* @echo elementName */').appendChild(div);
    }
  });
}());
