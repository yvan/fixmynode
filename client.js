#!/usr/bin/env node

var userid = require('userid')
var osenv = require('osenv')
var fs = require('fs')

var home = osenv.home()
var uid = userid.uid(osenv.user())
var gidadmin = userid.gid('admin')

// - sudo chown -R `whoami` ~/.npm
// drwxr-xr-x 415 YOUR_USERNAME admin 14110 Nov 20 00:54 .npm
fs.chown(home+'/.npm', uid, gidadmin, function(err){
  if(err)console.log(err)
  console.log('Successfully fixed \'~/.npm\' permission!')
})

// - sudo chown -R `whoami` /usr/local/lib/node_modules
// drwx------ 18 YOUR_USERNAME admin 612 Nov 20 01:33 node_modules
fs.chown('/usr/local/lib/node_modules', uid, gidadmin, function(err){
  if(err)console.log(err)
  console.log('Successfully fixed \'node_modules\' permission!')
})
