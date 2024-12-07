"use client"
import { useEffect, useState } from "react";

export  function useFetch(url, method="GET") {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataResponse, setDataResponse] = useState(null)
    useEffect(()=>{
        async function fetchData() {
            try {

                const response = await fetch(url,{
                    method,
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    mode : 'cors',
                })

                if (!response.ok) {
                    const jsonResponse = await response.json();
                    setError(jsonResponse?.message);
                    return;
                }

                const jsonResponse = await response.json();
                console.log(jsonResponse);
                
                setDataResponse(jsonResponse?.message?.contentComponents);
            } catch (error) {
                setError(error);
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    },[url]);

    return {dataResponse, loading, error}
}