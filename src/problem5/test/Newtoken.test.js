// const Newtoken = artifacts.require("Newtoken")

// contract("Newtoken", (accounts)=>{
  
//   before(async()=>{
//     newtoken = await Newtoken.deployed()
//   })
//   it("givesowner 1m tokens", async()=>{
//     let balance = await newtoken.balanceOf(accounts[0])
//     balance = web3.utils.fromWei(balance,'ether')
//     assert.equal(balance,'1000000',"Balance should be 1m tokens for contract creator")
//   })
//   it("can transfer tokens between acounts", async()=>{
//     let amount = web3.utils.toWei('1000','ether')
//     await newtoken.transfer(accounts[1], amount,{from:accounts[0]})

//     let balance  = await newtoken.balanceOf(accounts[1])
//     balance = web3.utils.fromWei(balance,'ether')
//     assert.equal(balance,'1000',"Balance should be 1k tokens for transfer")
//   })
// })


