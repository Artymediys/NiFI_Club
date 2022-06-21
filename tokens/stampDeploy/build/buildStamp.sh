#!/bin/bash
set -e

cd ..
cd ..
cd stamp/1
everdev sol compile StampToken.sol
everdev sol compile StampRoot.sol

everdev js wrap StampToken.sol
everdev js wrap StampRoot.sol

echo stamp built
