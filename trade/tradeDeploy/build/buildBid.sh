#!/bin/bash
set -e

cd ..
cd ..
cd bid/1
everdev sol compile Bid.sol
everdev sol compile BidRoot.sol

everdev js wrap Bid.sol
everdev js wrap BidRoot.sol

echo bid built
