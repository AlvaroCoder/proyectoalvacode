'use client'
import React, { useState, useEffect } from 'react';
import { Search, X, Loader2 } from 'lucide-react';

const MOCK_SEARCH_RESULTS = [
    { id: 1, title: 'Optimización de SQL y bases de datos NoSQL', slug: 'sql-nosql-optimization', type: 'Blog Post' },
    { id: 2, title: 'Tutorial: Primeros pasos con Next.js y Tailwind', slug: 'nextjs-tailwind-guide', type: 'Blog Post' },
    { id: 3, title: 'Proyecto: Aplicación G@llrisK (Análisis Montecarlo)', slug: 'gallrisk-project', type: 'Portafolio' },
];

export default function ButtonSearch({ className = "" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(() => document.getElementById('search-input')?.focus(), 50);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSearchQuery('');
        setSearchResults([]);
    };

    useEffect(() => {
        if (searchQuery.length < 3) {
            setSearchResults([]);
            return;
        }
        const handler = setTimeout(async () => {
            setIsSearching(true);
            await new Promise((r) => setTimeout(r, 400));
            setSearchResults(
                MOCK_SEARCH_RESULTS.filter((item) =>
                    item.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
            setIsSearching(false);
        }, 300);
        return () => clearTimeout(handler);
    }, [searchQuery]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isOpen && e.key === 'Escape') { handleClose(); return; }
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                handleOpen();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <>
            {/* Trigger button */}
            <button
                onClick={handleOpen}
                className={`
                    flex items-center gap-3 px-4 py-2
                    border border-[#E9ECEF]/20 text-[#ADB5BD]
                    hover:border-[#FB8500]/40 hover:text-[#FB8500]
                    transition-all duration-200 text-sm font-light
                    ${className}
                `}
                aria-label="Abrir búsqueda"
            >
                <Search className="w-4 h-4" />
                <span>Buscar…</span>
                <span className="font-mono text-[10px] border border-[#E9ECEF]/20 px-1.5 py-0.5 text-[#6C757D]">
                    ⌘K
                </span>
            </button>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-[#212529]/90 backdrop-blur-sm flex justify-center pt-20"
                    onClick={handleClose}
                >
                    <div
                        className="w-full max-w-2xl mx-4 bg-[#2A2E32] border border-[#E9ECEF]/10 shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search input */}
                        <div className="flex items-center gap-4 px-6 py-4 border-b border-[#E9ECEF]/10">
                            {isSearching
                                ? <Loader2 className="w-4 h-4 text-[#FB8500] animate-spin flex-shrink-0" />
                                : <Search className="w-4 h-4 text-[#ADB5BD] flex-shrink-0" />
                            }
                            <input
                                id="search-input"
                                type="text"
                                placeholder="Busca artículos, proyectos o tecnologías…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 bg-transparent text-[#F8F9FA] text-base font-light placeholder:text-[#6C757D] outline-none"
                            />
                            <button
                                onClick={handleClose}
                                className="text-[#6C757D] hover:text-[#ADB5BD] transition-colors"
                                aria-label="Cerrar"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Results */}
                        <div className="max-h-80 overflow-y-auto">
                            {searchQuery.length > 0 && searchResults.length === 0 && !isSearching && (
                                <p className="text-sm text-[#6C757D] font-light text-center py-10">
                                    Sin resultados para &ldquo;{searchQuery}&rdquo;
                                </p>
                            )}

                            {searchQuery.length === 0 && (
                                <p className="text-xs font-mono text-[#6C757D] text-center py-10 tracking-widest uppercase">
                                    Escribe para buscar
                                </p>
                            )}

                            {searchResults.map((result) => (
                                <a
                                    key={result.id}
                                    href={`/${result.type.toLowerCase().includes('portafolio') ? 'portfolio' : 'blog'}/${result.slug}`}
                                    onClick={handleClose}
                                    className="group flex items-center justify-between px-6 py-4 border-b border-[#E9ECEF]/10 last:border-0 hover:bg-[#343A40] transition-colors duration-200"
                                >
                                    <div>
                                        <p className="text-sm text-[#E9ECEF] font-light group-hover:text-[#FB8500] transition-colors">
                                            {result.title}
                                        </p>
                                        <p className="font-mono text-[9px] tracking-widest uppercase text-[#ADB5BD]/50 mt-0.5">
                                            {result.type}
                                        </p>
                                    </div>
                                    <Search className="w-3 h-3 text-[#ADB5BD]/30 group-hover:text-[#FB8500] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}