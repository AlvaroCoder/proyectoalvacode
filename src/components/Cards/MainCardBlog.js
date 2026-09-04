import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { useFetch } from '@/utils/customHooks';
import { URL_PROJECT } from '@/utils/urls';

const Skeleton = () => (
    <div className="animate-pulse flex flex-col lg:flex-row border border-[#E9ECEF]/10">
        <div className="w-full lg:w-3/5 h-64 sm:h-80 bg-[#343A40]" />
        <div className="w-full lg:w-2/5 p-8 space-y-4 bg-[#2A2E32]">
            <div className="h-2 w-1/3 bg-[#343A40] rounded" />
            <div className="h-5 w-full bg-[#343A40] rounded" />
            <div className="h-5 w-4/5 bg-[#343A40] rounded" />
            <div className="h-3 w-full bg-[#343A40] rounded" />
            <div className="h-3 w-3/4 bg-[#343A40] rounded" />
        </div>
    </div>
);

export default function MainCardBlog() {
    const { loading, dataResponse: featuredPost, error } = useFetch(URL_PROJECT.GET_FEATURE_BLOG);

    if (loading) return <Skeleton />;

    if (error || !featuredPost) {
        return (
            <div className="w-full p-8 border border-[#E9ECEF]/10 text-center">
                <p className="text-sm text-[#ADB5BD] font-light">
                    {error ? 'Error al cargar el artículo destacado.' : 'No hay artículo destacado disponible.'}
                </p>
            </div>
        );
    }

    const { heading, description, slug, categories, iconContent, publishedAt } = featuredPost;
    const primaryCategory = categories?.[0]?.name;

    return (
        <article className="group flex flex-col lg:flex-row border border-[#E9ECEF]/10 hover:border-[#FB8500]/20 transition-colors duration-300">

            {/* Image */}
            <div className="w-full lg:w-3/5 relative h-64 sm:h-80 overflow-hidden">
                <img
                    src={iconContent?.url}
                    alt={heading}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-between p-8 bg-[#2A2E32]">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.25em] uppercase">
                        {primaryCategory && (
                            <span className="text-[#FB8500]/70">{primaryCategory}</span>
                        )}
                        {primaryCategory && publishedAt && (
                            <span className="text-[#E9ECEF]/20">·</span>
                        )}
                        {publishedAt && (
                            <span className="text-[#ADB5BD]/60 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {publishedAt}
                            </span>
                        )}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-light text-[#F8F9FA] leading-snug">
                        {heading}
                    </h2>

                    <p className="text-sm text-[#ADB5BD] font-light leading-relaxed line-clamp-4">
                        {description}
                    </p>
                </div>

                <a
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase text-[#ADB5BD] hover:text-[#FB8500] transition-colors duration-200 mt-8"
                >
                    Leer artículo completo
                    <ArrowRight className="w-3 h-3" />
                </a>
            </div>
        </article>
    );
}