const { ethers } = require('ethers')

    const itx = new ethers.providers.InfuraProvider(
     'goerli',
     '8c76137cf27a485ca4a6a3d9ffd03e15'
   )
   

    const signer = new ethers.Wallet('881b389794ff67d12b755741d4c70714f52f40cae74b873df8738ba577493b27', itx)

    async function getBalance() {
        response = await itx.send('relay_getBalance', [signer.address])
        console.log(`Your current ITX balance is ${response.balance}`)
      }



getBalance()