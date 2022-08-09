import axios from "axios";
import { formatUnits } from "ethers/lib/utils";

const api_key: string = ""; // BSC API key

const addresses:string[] = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

const tokenAddress: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";

type Result = {
  status:number;
  message: string;
  result: any;
};

addresses.forEach(address=>{
  axios
  .get<Result>(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${tokenAddress}&address=${address}&tag=latest&apikey=${api_key}`)
  .then(response =>{
    console.log(address, formatUnits(response.data.result,8))})
  .catch(error=>{
    console.log(error, 'error')
  })
})