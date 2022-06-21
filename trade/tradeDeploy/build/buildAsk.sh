#!/bin/bash
set -e

cd ..
cd ..
cd ask/1
everdev sol compile Ask.sol
everdev sol compile AskRoot.sol

everdev js wrap Ask.sol
everdev js wrap AskRoot.sol

echo ask built
