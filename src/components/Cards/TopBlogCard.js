import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useFetch } from '@/utils/customHooks';
import { URL_PROJECT } from '@/utils/urls';

const Skeleton = () => (
    <div className="w-full border border-[#E9ECEF]/10 p-6">
        <div className="animate-pulse space-y-4">
            <div className="h-2 w-1/2 bg-[#343A40] rounded" />
            {[1, 2, 3].map((i) => (
                <div key={i} className="py-3 border-b border-[#E9ECEF]/10 space-y-2">
                    <div className="h-3 w-full bg-[#343A40] rounded" />
                    <div className="h-2 w-1/2 bg-[#343A40] rounded" />
                </div>
            ))}
        </div>
    </div>
);

export default function TopBlogCard() {
    const { loading, dataResponse, error } = useFetch(URL_PROJECT.GET_TOP_BLOGS);
    const topPosts = dataResponse || [];

    if (loading) return <Skeleton />;
    if (error || topPosts.length === 0) return null;

    return (
        <div className="w-full border border-[#E9ECEF]/10 p-6">
            <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#FB8500]/70 mb-6">
                Más leídos
            </p>
            <ul>
                {topPosts.map((post, index) => (
                    <li key={post.id} className="border-b border-[#E9ECEF]/10 last:border-0">
                        <a
                            href={`/blog/${post.slug}`}
                            className="group flex items-start gap-4 py-4 transition-colors duration-200"
                        >
                            <span className="font-mono text-[10px] text-[#FB8500]/40 mt-0.5 w-4 flex-shrink-0">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-[#E9ECEF] font-light group-hover:text-[#FB8500] transition-colors line-clamp-2 leading-snug">
                                    {post.heading}
                                </p>
                                {post.categories?.[0]?.name && (
                                    <p className="font-mono text-[9px] tracking-widest uppercase text-[#ADB5BD]/50 mt-1">
                                        {post.categories[0].name}
                                    </p>
                                )}
                            </div>
                            <ArrowRight className="w-3 h-3 text-[#ADB5BD]/30 group-hover:text-[#FB8500] flex-shrink-0 mt-1 transition-colors" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}