#!/bin/bash
set -e

cd ..
cd ..
cd seal/1
everdev sol compile SealToken.sol
everdev sol compile SealRoot.sol

everdev js wrap SealToken.sol
everdev js wrap SealRoot.sol

echo seal built
