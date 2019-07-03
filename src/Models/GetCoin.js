import axios from 'axios';
import { key } from '../config';

export default class Coin {
    url = 'https://rest.coinapi.io/';
    async getData() {
        try { 
            const res = axios.get(url, { headers: { `X-CoinAPI-Key: ${key}`}})
            console.log(res);
        } catch(er) {
            alert(er);
        };
    }

}



const AuthStr = 'Bearer '.concat(USER_TOKEN); 
axios.get(URL, { headers: { Authorization: AuthStr } })
 .then(response => {
     // If request is good...
     console.log(response.data);
  })
 .catch((error) => {
     console.log('error ' + error);
  });
