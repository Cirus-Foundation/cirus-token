# Setup and Deployment

## Install dependencies
``` npm install ```

## Deploy to network
Example deploying to ropsten:
```INFURA_ID=xxxx PRIVATE_KEY=xxxx FINAL_OWNER=xxxx ./node_modules/.bin/truffle migrate --network ropsten ```
- replace `INFURA_ID` value with infura project id.
- replace `PRIVATE_KEY` value with signing private key.
- replace `FINAL_OWNER` value recipient address of initial supply.
- replace `--network` value with mainnet when deploying to mainnet.
