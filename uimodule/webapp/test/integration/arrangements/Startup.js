sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("sl.ui5toolingdemo21.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "sl.ui5toolingdemo21",
          async: true,
          manifest: true
        }
      });
    }

  });
});
