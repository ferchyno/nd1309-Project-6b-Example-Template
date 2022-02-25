## Rinkeby Project Deployment
The deployments has been done from the Wallet Address:
	https://rinkeby.etherscan.io/address/0xd88595bcb6518ea2c7ac0459677fd237acf31b76

The Smart Contract has been deployed with address:
	https://rinkeby.etherscan.io/address/0xb57817d8c6a318cb66ba4b70e8a5a5d1c8a11383

The deploy stack is the next:
	truffle migrate --reset --network rinkeby
	Using network 'rinkeby'.

	Running migration: 1_initial_migration.js
	  Replacing Migrations...
	  ... 0xbb19c7ae195c2e9da61722d8fe9c5e60b4e241f6956aeeb79a5f66c08f0b506d
	  Migrations: 0xda0a855de5d4ff218c864b4a77fcc7e6b6d21bbb
	Saving successful migration to network...
	  ... 0x2b2a433d0b18b5546ba20873be937ab54889f186d5de684e66fdb4ab71ebc06e
	Saving artifacts...

	Running migration: 2_deploy_contracts.js
	  Deploying SupplyChain...
	  ... 0x5533b0245d37dc5d4b679900f065f3a5bfebe3701f4e7a7fc4922026c7ad81ad
	  SupplyChain: 0xb57817d8c6a318cb66ba4b70e8a5a5d1c8a11383
	Saving successful migration to network...
	  ... 0x7b2e7768038a3e5efe2b58dca6d962f49f9ba9b9d901d194407ad13c2784bd9a
	Saving artifacts...


## Project
The DApp has been reimplemented adding support to add Farmeres, Distributors, Retailers and Consumers
![truffle test](screenshots/roles.png)

You must set the role account in Metamask to launch the role actions
All actions has been implemented to use only with a specific role:
Farmer
* Harvest
* Process
* Pack
* For Sale

Distributor:
* Buy
* Ship

Retailer
* Receive

Consumer
* Purchase

There are 2 buttons to show the Product Info: Fetch Data 1 and Fetch Data 2
![truffle test](screenshots/search_product_data1.png)
![truffle test](screenshots/search_product_data2.png)

An Example to Transaction History done from local blockchain is the next:
![truffle test](screenshots/transactions.png)


## Use Used Accounts

Available Accounts
(0) 0x27D8D15CbC94527cAdf5eC14B69519aE23288B95 (100 ETH) Contract Owner
(1) 0x018C2daBef4904ECbd7118350A0c54DbeaE3549A (100 ETH) Farmer
(2) 0xCe5144391B4aB80668965F2Cc4f2CC102380Ef0A (100 ETH) Distributor
(3) 0x460c31107DD048e34971E57DA2F99f659Add4f02 (100 ETH) Retailer
(4) 0xD37b7B8C62BE2fdDe8dAa9816483AeBDBd356088 (100 ETH) Consumer
(5) 0x27f184bdc0E7A931b507ddD689D76Dba10514BCb (100 ETH)
(6) 0xFe0df793060c49Edca5AC9C104dD8e3375349978 (100 ETH)
(7) 0xBd58a85C96cc6727859d853086fE8560BC137632 (100 ETH)
(8) 0xe07b5Ee5f738B2F87f88B99Aac9c64ff1e0c7917 (100 ETH)
(9) 0xBd3Ff2E3adEd055244d66544c9c059Fa0851Da44 (100 ETH)

Private Keys
(0) 0x9137dc4de37d28802ff9e5ee3fe982f1ca2e5faa52f54a00a6023f546b23e779
(1) 0x18911376efeff48444d1323178bc9f5319686b754845e53eb1b777e08949ee9b
(2) 0xf948c5bb8b54d25b2060b5b19967f50f07dc388d6a5dada56e5904561e19f08b
(3) 0xfad19151620a352ab90e5f9c9f4282e89e1fe32e070f2c618e7bc9f6d0d236fb
(4) 0x19d1242b0a3f09e1787d7868a4ec7613ac4e85746e95e447797ce36962c7f68b
(5) 0x3bb675f8c07099816e23a3e283090cfb0f793ab625b73ca51a2d027a3c1f2d0e
(6) 0x0faf45306c7daf14d86c266690ce54490e8c0104154cafa87d9e93724efc239d
(7) 0xf2a921dee0ebd7bfaba1a271bcd48c99baa6341a1cdf84ba843521a5555e0273
(8) 0x62734594840dade92a24448c8f676cc3c59fd68909837303417295f2c0f27963
(9) 0xc29afb730456eb83415046550faf8065c8531765396156db8d97fd1fd64c6a6e


## UML diagrams 
![truffle test](screenshots/UdacityProyectCoffeeActivity.png)
![truffle test](screenshots/UdacityProyectCoffeeSecuence.png)
![truffle test](screenshots/UdacityProyectCoffeeState.png)
![truffle test](screenshots/UdacityProyectCoffeeDataModel.png)


## Versioned:

* Truffle v4.1.14 (core: 4.1.14)
* Solidity v0.4.24 (solc-js)
* Ganache CLI v6.12.2 (ganache-core: 2.13.2)
* Node v16.13.2
* npm 8.4.1
* npm view web3 version 1.7.0

## Repository
* https://github.com/ferchyno/nd1309-Project-6b-Example-Template.git