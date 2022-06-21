#!/bin/bash
set -e

cd ..
cd ..
cd art2/1
everdev sol compile Art2Token.sol
everdev sol compile Art2Root.sol
everdev sol compile Art2Series.sol

everdev js wrap Art2Token.sol
everdev js wrap Art2Root.sol
everdev js wrap Art2Series.sol

echo art2 built
