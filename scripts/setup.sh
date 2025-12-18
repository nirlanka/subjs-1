#!/usr/bin/env zsh

sudo chmod +x ./bin/node-*/bin/node
xattr -d com.apple.quarantine ./bin/node-*/bin/node

sudo chmod +x ./bin/node-*/bin/npm
sudo chmod +x ./bin/node-*/bin/npx
sudo chmod +x ./bin/node-*/bin/corepack

sudo chmod +x ./serve
