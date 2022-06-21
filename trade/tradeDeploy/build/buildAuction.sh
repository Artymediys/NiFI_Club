#!/bin/bash
set -e

cd ..
cd ..
cd auction/1
everdev sol compile DirectAuction.sol
everdev sol compile DirectAuctionRoot.sol

everdev js wrap DirectAuction.sol
everdev js wrap DirectAuctionRoot.sol

echo auction built
