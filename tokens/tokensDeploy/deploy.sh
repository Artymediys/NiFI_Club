#!/bin/bash
set -e

cd build
sh buildArt.sh
sh buildArt2.sh
cd ..

cd deploy
node index.js
cd ..

echo DONE
