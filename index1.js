import fetch from 'node-fetch';
import { Buffer } from 'buffer';
import fs from 'fs';
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { bcs } from '@mysten/bcs';
import chalk from "chalk";
import readlineSync from "readline-sync";

const delay = async (ms, label) => {
  let minutes = ms / 60000;
  const interval = setInterval(() => {
    console.log(`Waiting = ${Math.floor(minutes / 60)}h ${Math.floor(minutes % 60)}m`);
    minutes--;
    if (minutes < 0) {
      clearInterval(interval);
      console.log('\n');
    }
  }, 60000);
  await new Promise(resolve => setTimeout(resolve, ms));
  clearInterval(interval);
  console.log('\n');
};

const gettimeclaim = (address) => new Promise((resolve, reject) => {
  fetch('https://fullnode.mainnet.sui.io/', {
    method: 'POST',
    headers: {
      'accept': '*/*',
      'accept-language': 'en-GB,en;q=0.9,en-US;q=0.8',
      'client-sdk-type': 'typescript',
      'client-sdk-version': '0.51.0',
      'client-target-api-version': '1.21.0',
      'content-type': 'application/json',
      'origin': 'https://walletapp.waveonsui.com',
      'priority': 'u=1, i',
      'referer': 'https://walletapp.waveonsui.com/',
      'sec-ch-ua': '"Chromium";v="124", "Microsoft Edge";v="124", "Not-A.Brand";v="99", "Microsoft Edge WebView2";v="124"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0'
    },
    body: JSON.stringify({
      'jsonrpc': '2.0',
      'id': 45,
      'method': 'suix_getDynamicFieldObject',
      'params': [
        '0x4846a1f1030deffd9dea59016402d832588cf7e0c27b9e4c1a63d2b5e152873a',
        {
          'type': 'address',
          'value': address
        }
      ]
    })
  }).then(res => res.json())
    .then(res => {
      resolve(res)
    })
    .catch(err => reject(err));
});

const getDelayDuration = () => {
  const options = {
    '30 minutes': 1800000,
    '1 hour': 3600000,
    '3 hours': 10900000
  };

  const keys = Object.keys(options);
  const index = readlineSync.keyInSelect(keys, 'Pilih Delay yang lu mau:');
  if (index === -1) {
    console.log('Tidak ada yang dipilih. Exiting...');
    process.exit();
  }

  const label = keys[index] === '30 minutes' ? 'Next Claim 30 menit' : keys[index] === '1 hour' ? 'Next Claim 1 jam' : 'Next Claim 3 jam';
  return { duration: options[keys[index]], label };
};

const formatTimeLeft = (ms) => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  return `${hours}h ${minutes}m`;
};

(async () => {
  const { duration, label } = getDelayDuration();

  var file = fs.readFileSync('data.json', 'utf-8');
  var splitFile = JSON.parse(file);
  const totalAddresses = splitFile.length;

  while (true) {
    console.clear();
    console.log(chalk.blueBright(`SCRIPT AUTO CLAIM OCEAN SGB TEAM`));
    console.log(chalk.blueBright(`By Fashlulfida A \n`));
    console.log(chalk.greenBright(`Total Wallet yang akan diproses: ${totalAddresses}`));

    for (let i = 0; i < totalAddresses; i++) {
      try {
        console.log("=======================================");
        console.log(chalk.yellow(`Processing address ${i + 1} of ${totalAddresses}`));
        const keypair = Ed25519Keypair.deriveKeypair(splitFile[i]);
        const address = keypair.getPublicKey().toSuiAddress();
        console.log("Address : " + address);
        const client = new SuiClient({
          url: "https://fullnode.mainnet.sui.io/",
        });

        let waktu;
        waktu = await gettimeclaim(address);
        waktu = waktu.result.data.content.fields.last_claim;
        waktu = waktu.toString();

        let time;
        time = Date.now();
        time = time.toString();

        const msto = time - waktu;

        if (msto > 7200000) {
          const packageObjectId = '0x1efaf509c9b7e986ee724596f526a22b474b15c376136772c00b8452f204d2d1';
          const tx = new TransactionBlock();
          tx.moveCall({
            target: `${packageObjectId}::game::claim`,
            arguments: [tx.object("0x4846a1f1030deffd9dea59016402d832588cf7e0c27b9e4c1a63d2b5e152873a"),
              tx.pure('0x0000000000000000000000000000000000000000000000000000000000000006'),
            ],
          });

          const result = await client.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock: tx,
          });

          const txsk = { result };
          console.log(chalk.green(`Sukses Claim => https://suiscan.xyz/mainnet/tx/${txsk.result.digest}`));
        } else {
          const remainingTime = 7200000 - msto;
          console.log(chalk.red(`Belum Waktunya Claim, Sisa Waktu: ${formatTimeLeft(remainingTime)}`));
        }
      } catch (error) {
        console.log(chalk.red(`Error processing address ${splitFile[i]}: ${error.message}`));
      }
    }

    console.log(chalk.yellow(`${label}.....`));
    await delay(duration, label);
  }
})();