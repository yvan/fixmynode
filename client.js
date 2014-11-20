#!/usr/bin/env node

var fs = require('fs')

// - sudo chown -R `whoami` ~/.npm
fs.chown('', function(err){
  console.log(err)
})

// - /usr/local/lib/node_modules
fs.chown('/usr/local/lib/node_modules', function(err){
  console.log(err)
})
