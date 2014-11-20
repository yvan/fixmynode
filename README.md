Fixmynode - Fixes the permisssions on your node installation on OSX.
============================================================
[![NPM](https://nodei.co/npm/fixmynode.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fixmynode/)

Do you constantly get this annoying error?
```
npm ERR! Error: EACCES, open '/Users/YOUR_USERNAME/.npm/-/all/.cache.json'
npm ERR!  { [Error: EACCES, open '/Users/YOUR_USERNAME/.npm/-/all/.cache.json']
npm ERR!   errno: 3,
npm ERR!   code: 'EACCES',
npm ERR!   path: '/Users/YOUR_USERNAME/.npm/-/all/.cache.json' }
npm ERR!
npm ERR! Please try running this command again as root/Administrator.

npm ERR! System Darwin 12.2.0
npm ERR! command "node" "/usr/local/bin/npm" "search" "bower"
npm ERR! cwd /Users/YOUR_USERNAME
npm ERR! node -v v0.10.4
npm ERR! npm -v 1.2.18
npm ERR! path /Users/YOUR_USERNAME/.npm/-/all/.cache.json
npm ERR! code EACCES
npm ERR! errno 3
npm ERR! stack Error: EACCES, open '/Users/YOUR_USERNAME/.npm/-/all/.cache.json'
npm ERR!
npm ERR! Additional logging details can be found in:
npm ERR!     /Users/chietala/npm-debug.log
npm ERR! not ok code 0
```
It whines at you, "Please try running this command again as root/Administrator." So you
constantly have to run your node commands as 'sudo' and plug in your password. Sucks
right?

There could be a permissions problem on your ~/.npm directory. For users who don't know
what'~' means, it's a shorthand for /Users/YOUR_USERNAME/ where the first '/' is your
root directory. Full path to your '~/.npm' directory is '/Users/YOUR_USERNAME/.npm'; it
stores various npm functionality.

There could also a permissions problem on your /usr/local/lib/node_modules. This is where
npm tries to store your globally installed modules. It is the system level version of
the 'node_modules' folder you find in basically any project you make and install
dependencies into

Usage - Solve Yo Problems AKA intro was TLDR
=================
Run:
```
sudo fixmynode
Password:TYPE_YOUR_PASSWORD
```
That's it. You're done, that will fix the two permissions problems above and from now on out you should be able to use:
```
npm install SOME_MODULE
```
without having to type in your password everytime.


Moral Support
=============
If something goes wrong on your system with node and you need help figuring it out and my
package isn't working as intended or at all I'm almost always available on my twitter
handle <a href="https://twitter.com/yvanscher">@yvanscher</a>. Hit me up and we'll try
and fix your system; I'm no expert but we can probably solve it together.
