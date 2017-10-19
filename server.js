var express = require('express');
var path = require('path');
var morgan = require('morgan');
var fallback = require('express-history-api-fallback');

var apiRest = express();


//Logger execute middleware
apiRest.use(morgan('dev'));

var root = __dirname + '/frontend';

apiRest.use(express.static(root));
apiRest.use(fallback('index.html', { root: root }));



apiRest.get('/',function(req,res){});


/**
 * API RESTFUL listen port server.
 * @param  {[type]} process  [description]
 * @param  {[type]} function [description]
 * @return {[type]}          [description]
 */
apiRest.listen( process.env.PORT || 5000,
  function(){
    console.log('\n     Mundilabel ApiRest listen\n'+
                  '     version: 1.0.0\n'+
                  '     context: dev\n'+
                  '     port:5000\n'
    );//Init-message
  console.log('log:');
});//ApiRest-listen
