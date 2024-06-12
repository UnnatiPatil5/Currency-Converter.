import React from "react";
import { useState, useEffect} from "react";

function useCurr(currency){
    const [Data, setData] = useState({})
    useEffect( () => {fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json()
    .then((res) => setData(res[currency])))
    console.log(Data);
}, [currency])
  
    console.log(Data);
    return Data
}
export default useCurr;