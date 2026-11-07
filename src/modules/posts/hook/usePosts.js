import { useState, useEffect } from 'react';
import { postsService } from '@/modules/posts/service/blog.service';
export default function usePosts() { 
    const [loading, setLoading] = useState(true);
    const [dataResponse, setDataResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
         Promise.all([postsService.getPosts()])
           .then(([posts]) => {
             setDataResponse(posts);
           })
           .catch(setError)
           .finally(() => setLoading(false));
    }, []);

    return { loading, dataResponse, error };
}