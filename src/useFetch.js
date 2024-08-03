import { useState,useEffect } from "react";

const useFetch=(url)=>{//custom hook

    const[Data,setData]=useState(null);
    const[isLoading,setisLoading]=useState(true);
    const[error,seterror]=useState(null);

    
    
    useEffect(()=>{

        const abortCont=new AbortController();

            fetch(url,{signal : abortCont.signal})
            .then(res=>{
                console.log(res);
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data)=>{
                 setData(data);
                 setisLoading(false);
                 seterror(null);
            })
            .catch((err)=>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                setisLoading(false);
                seterror(err.message);
                }
                
            })
      
        
        return ()=>abortCont.abort();
        
    },[url]);

    return {Data,isLoading,error}
}

export default useFetch;