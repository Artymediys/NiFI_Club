#!/bin/bash
set -e

cd build
sh buildSeal.sh
cd ..

cd sealDeploy
node index.js
cd ..

cd build
sh buildStamp.sh
cd ..

cd stampDeploy
node index.js
cd ..

cd build
sh buildForever.sh
cd ..

cd foreverDeploy
node index.js
cd ..

echo DONE
