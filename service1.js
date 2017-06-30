/**
* @name service1
* @summary Service 1 entry point
* @description says hello I'm service 1
*/
'use strict';

const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();

const confg = {
  "hydra": {
    "serviceName": "service1",
    "serviceIP": "",
    "servicePort": 5001,
    "serviceType": "test",
    "serviceDescription": "says hello I'm service 1",
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
    '/v1/hello': require('service-v1-routes')
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
const express = hydraExpress.getExpress();
let api = express.Router();

// example of using res.json to return a response
api.get('/', (req, res) => {
  res.json({
    result: {
      msg: `hello from ${hydra.getServiceName()} - ${hydra.getInstanceID()}`
    }
  });
});
