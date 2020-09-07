/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "sl/ui5toolingdemo21/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
