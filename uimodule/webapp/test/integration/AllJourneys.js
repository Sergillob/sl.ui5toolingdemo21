sap.ui.define([
  "sap/ui/test/Opa5",
  "sl/ui5toolingdemo21/test/integration/arrangements/Startup",
  "sl/ui5toolingdemo21/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
