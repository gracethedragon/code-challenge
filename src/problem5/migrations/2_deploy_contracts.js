const Newtoken = artifacts.require("Newtoken");

module.exports = function (deployer) {
  deployer.deploy(Newtoken, 1000000);
};
