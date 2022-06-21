#!/bin/bash
set -e

cd ..
cd ..
cd art/1
everdev sol compile ArtToken.sol
everdev sol compile ArtRoot.sol

everdev js wrap ArtToken.sol
everdev js wrap ArtRoot.sol

echo art built
