/**
* @name service1
* @summary Service 3 entry point
* @description says hello I'm service 3
*/
'use strict';

const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();

const express = hydraExpress.getExpress();
let api = express.Router();

const config = {
  "hydra": {
    "serviceName": "service",
    "serviceIP": "",
    "servicePort": 5003,
    "serviceType": "test",
    "serviceDescription": "says hello I'm service instance 3",
    "redis": {
      "url": "redis://127.0.0.1:6379/15"
    }
  }
};

/**
* Load configuration file and initialize hydraExpress app.
*/
hydraExpress.init(config, () => {
  hydraExpress.registerRoutes({
    '/v1/myservice': setupRoutes()
  });
})
  .then((serviceInfo) => {
    let logEntry = `Started ${hydra.getServiceName()} (v.${hydra.getInstanceVersion()})`;
    console.log(logEntry);
    console.log(serviceInfo);
  })
  .catch((err) => {
    console.log('err', err);
  });


/**
 * Setup simple express style route
 */
function setupRoutes() {
  // example of using res.json to return a response
  api.get('/', (req, res) => {
    res.json({
      result: {
        msg: `hello from ${hydra.getServiceName()} - ${hydra.getInstanceID()}`
      }
    });
  });

  return api;
}

