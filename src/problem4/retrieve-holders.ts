
import 'dotenv/config'
import axios from "axios";
import { formatUnits } from "ethers/lib/utils";

const api_key:string = process.env.api_key as string; // BSC API key

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

function retrieve(){
  try{
    addresses.forEach(async (address) =>{
    const data = await axios.get<Result>(
      `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${tokenAddress}&address=${address}&tag=latest&apikey=${api_key}`,{
          headers: {
            Accept: 'application/json',
          },
        }
      )
    console.log(address, formatUnits(data.data.result,8))
    })
  } catch (error){
       if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

retrieve()