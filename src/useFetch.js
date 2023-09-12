import { useState , useEffect } from "react";
const useFetch = (url) => {
   const [data,setData]=useState(null)
   const [isPending, setIsPending]=useState(true)
   const [errorthere,setErrorthere]=useState(null)
    useEffect(()=>{
      const abortC=new AbortController()
        fetch(url ,{signal: abortC.signal})
        .then((response)=>{
         // console.log(response)
         if(!response.ok){
            throw Error("This fetch could not be completed")
         }
         return response.json()
        })
        .then((data)=>{
         setData(data)
         setIsPending(false)
         setErrorthere(null)
        })
        .catch((error)=>{
         if(error.name === 'AbortError'){
            console.log("Fetch Aborted")
         }
         else{
         setErrorthere(error.message)
         setIsPending(false) 
         }
        })
        return ()=>{abortC.abort()}
      },[url])
      return {data,isPending,errorthere,setData}
}
 
export default useFetch;