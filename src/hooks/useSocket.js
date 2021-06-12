import { useEffect } from 'react';


export const useSocket = () => {
  //connect to websocket API
  ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
  //inside useEffect we need to make API with async function  
  const apiCall = async () => {
      await fetch(url + "/products")
        .then((res) => res.json())
        .then((data) => (pairs = data));
  
      //coinbase returns over 120 currencies, this will filter to only USD based pairs
      let filtered = pairs.filter((pair) => {
        if (pair.quote_currency === "USD") {
          return pair;
        }
      });
      //sort filtered currency pairs alphabetically
      filtered = filtered.sort((a, b) => {
        if (a.base_currency < b.base_currency) {
          return -1;
          }
        if (a.base_currency > b.base_currency) {
          return 1;
          }
        return 0;
      });
    
    setcurrencies(filtered);

    first.current = true;
  };
  
  //call async function
  apiCall()
},[]