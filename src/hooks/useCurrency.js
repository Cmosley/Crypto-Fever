import { useEffect } from 'react';

export const useCurrency = () => {
  //prevents this hook from running on initial render
  if (!first.current) {
    return;
  }

  
  let msg = {
    type: "subscribe",
    product_ids: [pair],
    channels: ["ticker"]
  };

  let jsonMsg = JSON.stringify(msg);
  ws.current.send(jsonMsg);

  let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
  const fetchHistoricalData = async () => {
    let dataArr = [];
    await fetch(historicalDataURL)
      .then((res) => res.json())
      .then((data) => (dataArr = data));
    
    //helper function to format data that will be implemented later
    let formattedData = formatData(dataArr);
    setpastData(formattedData);
  };
  //run async function to get historical data
  fetchHistoricalData();
  //need to update event listener for the websocket object so that it is listening for the newly updated currency pair
  ws.current.onmessage = (e) => {
    let data = JSON.parse(e.data);
    if (data.type !== "ticker") {
      return;
    }
    //every time we receive an even from the websocket for our currency pair, update the price in state
    if (data.product_id === pair) {
      setprice(data.price);
    }
  };
//dependency array is passed pair state, will run on any pair state change
}, [pair];