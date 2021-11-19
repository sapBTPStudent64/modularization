sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/Device",
		"student64/sap/training/modularization/model/models"
	],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("student64.sap.training.modularization.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

				// set the device model
                this.setModel(models.createDeviceModel(), "device");         

            },
            createContent: function() {
                var oButton = new sap.m.Button("idBtn", { 
                    text: "Touch Me!"
                });
                oButton.placeAt("content");

                sap.ui.getCore().byId("idBtn").attachPress(function() { 
                    sap.ui.require(["student64/sap/training/modularization/myLib/MessageManager"],
                    function(MessageManager) {
                        MessageManager.reportSuccess("button was pressed", "success");
                    });                    
                });
            }
        })
    }
)