import { useEffect, useState } from 'react';
import { postsService } from '@/modules/posts/service/blog.service';
export default function useDetailPost(slug) {
    const [loading, setLoading] = useState(true);
    const [dataResponse, setDataResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;

        Promise.all([postsService.getPostBySlug(slug)])
            .then(([post]) => {
                setDataResponse(post);
            })
            .catch(setError)
            .finally(() => setLoading(false));
    }, [slug]);

    return { loading, dataResponse, error };
}