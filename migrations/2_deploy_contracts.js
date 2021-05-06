const BN = require('bn.js');

const CirusToken = artifacts.require("./CirusToken.sol");

const NAME = "Cirus";
const SYMBOL = "CIRUS";
const SUPPLY = new BN("250000000");
const DECIMALS = new BN("1000000000000000000"); // 10 ^ 18
const FINAL_OWNER = process.env.FINAL_OWNER;

module.exports = async (deployer, network, [owner]) => {
    console.log(`Deploying on ${network}...`);
    const SUPPLY_WEI = SUPPLY.mul(DECIMALS);
    await deployer.deploy(CirusToken, NAME, SYMBOL, SUPPLY_WEI, FINAL_OWNER);

    console.log("Deploying contract...");
    const Token = await CirusToken.deployed();
    console.log(`Deployed ${Token.address}`);
};