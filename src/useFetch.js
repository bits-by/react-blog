import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() =>{

     const abortCont = new AbortController();

     setTimeout(() => {
        fetch(url, {signal: abortCont.signal} )         //get request to local host.
        
        .then(res => {
           // console.log(res);                         //check end point error   ok:true
           if(!res.ok) {
              throw Error('Could not fetch tha data from the resource');
           }
           return res.json();
        })
        .then(data => {
           setdata(data);
           setIsPending(false);
           setError(null);
        })
        .catch(err => {
           if(err.name === 'AbortError') {
              console.log('fetch abort');
           }else {
            setIsPending(false);          //not show loading if ther is error.
            setError(err.message);
           }
           
        })
    }, 200);

  return() =>abortCont.abort();
}, [url]);
 return { data , isPending , error }
}

    
 
export default useFetch;