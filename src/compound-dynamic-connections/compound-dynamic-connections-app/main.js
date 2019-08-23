/* globals findElementPerRuntimeId, resetError, showError, hideError */
'use strict';
window.findElementPerRuntimeId = function (runtimeId) {
  return document.querySelector(`[runtime-id="${runtimeId}"]`);
};

window.resetError = function () {
  hideError();
  document.querySelector('#errormessage').innerHTML = '';
};

window.showError = function () {
  var clslist = document.querySelector('#error').classList;
  if (clslist.contains('hidden')) {
    clslist.remove('hidden');
  }
  if (!clslist.contains('show')) {
    clslist.add('show');
  }
};

window.hideError = function () {
  var clslist = document.querySelector('#error').classList;
  if (clslist.contains('show')) {
    clslist.remove('show');
  }
  if (!clslist.contains('hidden')) {
    clslist.add('hidden');
  }
};

/* eslint no-unused-vars: [2, { "varsIgnorePattern": "Handler" }] */
window.addHandler = function () {
  resetError();
  try {
    document.querySelector('#addedconnectionid').innerHTML = '';
    var runtimeId = document.querySelector('#runtimeidadd').value;
    var connectionJSON = document.querySelector('#connection').value;
    console.log('addHandler: add connection ' + JSON.stringify(JSON.parse(connectionJSON), null, 4) +
      ' to ' + runtimeId);

    var elem = findElementPerRuntimeId(runtimeId);

    var connectionId = elem.addDynamicConnection(JSON.parse(connectionJSON));
    document.querySelector('#addedconnectionid').innerHTML = connectionId;
  } catch (e) {
    showError();
    console.log(e);
    document.querySelector('#errormessage').innerHTML = e.message;
  }
};

window.removeHandler = function () {
  resetError();
  try {
    var runtimeId = document.querySelector('#runtimeidremove').value;
    var elem = findElementPerRuntimeId(runtimeId);
    var connectionId = document.querySelector('#connectionid').value;
    var connectionJSON;
    if (!connectionId || connectionId.length === 0) {
      connectionJSON = document.querySelector('#connection').value;
      console.log('removeHandler: remove connection ' + connectionJSON + ' from ' + runtimeId);
      elem.removeDynamicConnection(JSON.parse(connectionJSON));
    } else {
      console.log('removeHandler: remove connection ' + connectionId + ' from ' + runtimeId);
      elem.removeDynamicConnection(connectionId);
    }
  } catch (e) {
    showError();
    document.querySelector('#errormessage').innerHTML = e.message;
  }
};

window.exportHandler = function () {
  resetError();
  try {
    var runtimeId = document.querySelector('#runtimeidexport').value;
    console.log('exportHandler: export connections  from ' + runtimeId);
    var elem = findElementPerRuntimeId(runtimeId);
    var connectionsJson = elem.exportDynamicConnections();
    console.log('exported connections', connectionsJson);
    document.querySelector('#exportedcontent').innerHTML =
      '<pre>' + JSON.stringify(JSON.parse(connectionsJson), null, 4) + '</pre>';
  } catch (e) {
    showError();
    document.querySelector('#errormessage').innerHTML = e.message;
  }
};

window.importHandler = function () {
  resetError();
  try {
    var runtimeId = document.querySelector('#runtimeidimport').value;
    var connectionJSON = document.querySelector('#connection').value;

    console.log('importHandler: import connections ' + connectionJSON + ' to ' + runtimeId);
    var elem = findElementPerRuntimeId(runtimeId);
    elem.importDynamicConnections(connectionJSON);
  } catch (e) {
    showError();
    document.querySelector('#errormessage').innerHTML = e.message;
  }
};

window.generateConnectionIdHandler = function () {
  resetError();
  try {
    var runtimeId = document.querySelector('#runtimeidgetConnectionId').value;
    var connectionJSON = document.querySelector('#connection').value;
    var elem = findElementPerRuntimeId(runtimeId);

    console.log('getConnectionIdHandler: get connectionId ' + connectionJSON);
    var connectionId = elem.generateConnectionId(JSON.parse(connectionJSON));
    document.querySelector('#getconnectionid').innerHTML = connectionId;
  } catch (e) {
    showError();
    document.querySelector('#errormessage').innerHTML = e.message;
  }
};
