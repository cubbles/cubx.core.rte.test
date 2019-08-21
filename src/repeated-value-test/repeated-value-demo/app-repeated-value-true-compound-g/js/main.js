'use strict';
(function () {
  document.addEventListener('cifReady', function () {
    // document.querySelector('[cubx-core-crc]').classList.add('container');
    document.querySelector('<%= webpackageName %>-repeated-value-true-compound-g').classList.add('row');
    document.querySelector('<%= webpackageName %>-repeated-value-elementary-e').classList.add('col-md-6');
    document.querySelector('<%= webpackageName %>-repeated-value-elementary-f').classList.add('col-md-6');
  });
})();
