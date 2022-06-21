#!/bin/bash
set -e

cd build
sh buildAsk.sh
sh buildAuction.sh
sh buildBid.sh
cd ..

cd deploy
node index.js
cd ..

echo DONE
