import { useState, useEffect } from "react";
import { categorieService } from "../service/categorie.service";

export default function useCategories() { 
    const [loading, setLoading] = useState(true);
    const [dataResponse, setDataResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => { 
        Promise.all([categorieService.getCategories()])
        .then(([categories]) => {
            setDataResponse(categories);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    }, [])
    return { loading, dataResponse, error };
}