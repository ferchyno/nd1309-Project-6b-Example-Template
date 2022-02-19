// migrating the appropriate contracts
// var FarmerRole = artifacts.require("./FarmerRole.sol");
// var DistributorRole = artifacts.require("./DistributorRole.sol");
// var RetailerRole = artifacts.require("./RetailerRole.sol");
// var ConsumerRole = artifacts.require("./ConsumerRole.sol");
// var SupplyChain = artifacts.require("./SupplyChain.sol");
//
// var Roles = artifacts.require("./Roles.sol");
var Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {
  // deployer.deploy(FarmerRole);
  // deployer.deploy(DistributorRole);
  // deployer.deploy(RetailerRole);
  // deployer.deploy(ConsumerRole);
  // deployer.deploy(SupplyChain);
  // deployer.deploy(Roles);
  deployer.deploy(Ownable, { gas: 800000000, from: "0x8BFf4085538746863EFAb81b557b492aA9cEF437" });
  deployer.deploy(Ownable);
};
