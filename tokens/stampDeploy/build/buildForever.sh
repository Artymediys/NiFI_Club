#!/bin/bash
set -e

cd ..
cd ..
cd forever/1
everdev sol compile ForeverToken.sol
everdev sol compile ForeverRoot.sol

everdev js wrap ForeverToken.sol
everdev js wrap ForeverRoot.sol

echo forever built
