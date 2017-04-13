'use strict';

var express = require('express'),
  router = express.Router(), // eslint-disable-line new-cap
  vcapServices = require('vcap_services'),
  extend = require('util')._extend,
  watson = require('watson-developer-cloud');


//Follow the instructions from Section  3.4.5 - Step3 - Example3-6

//Require Watson Service credentials


//Require the Watson Speech to Text API defined in servicedefs.js


//Set up an endpoint to serve speech-to-text auth tokens