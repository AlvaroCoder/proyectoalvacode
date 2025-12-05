'use client'
import React, { useState, useEffect } from 'react';
import { Search, X, Zap, Command } from 'lucide-react';

const SEARCH_API_URL = "/api/posts/search?q=";

const MOCK_SEARCH_RESULTS = [
    { id: 1, title: 'Optimización de SQL y bases de datos NoSQL', slug: 'sql-nosql-optimization', type: 'Blog Post' },
    { id: 2, title: 'Tutorial: Primeros pasos con Next.js y Tailwind', slug: 'nextjs-tailwind-guide', type: 'Blog Post' },
    { id: 3, title: 'Proyecto: Aplicación G@llrisK (Análisis Montecarlo)', slug: 'gallrisk-project', type: 'Portafolio' },
];

export default function ButtonSearch({className=""}) {
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
            
            console.log(`Buscando en API: ${SEARCH_API_URL}${searchQuery}`);
            
            await new Promise(resolve => setTimeout(resolve, 500)); 

            const filteredResults = MOCK_SEARCH_RESULTS.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            setSearchResults(filteredResults);
            setIsSearching(false);

        }, 300);

        return () => clearTimeout(handler);
    }, [searchQuery]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isOpen && event.key === 'Escape') {
                handleClose();
                return;
            }

            const isCmdK = (event.metaKey || event.ctrlKey) && event.key === 'k';
            
            if (isCmdK) {
                event.preventDefault();
                handleOpen();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]); 

    return (
        <>
           
            <button
                onClick={handleOpen}
                className={`
                    flex items-center justify-between
                    w-full max-w-xs px-4 py-2 rounded-xl
                    bg-[#212529] border border-[#FFB703]/50 text-gray-300
                    shadow-md shadow-[#FFB703]/20
                    hover:bg-[#212529] hover:text-[#FFB703] 
                    transition-all duration-300
                    ${className}
                `}
                aria-label="Abrir Búsqueda Global"
            >
                <div className='flex items-center gap-2'>
                    <Search className='w-4 h-4' />
                    <span className='text-sm font-medium'>Buscar...</span>
                </div>
                
             
                <div className='flex items-center gap-1 text-xs font-mono text-gray-500 group-hover:text-[#FFB703] border border-gray-700 rounded-md px-1.5 py-0.5'>
                    <span className='hidden sm:inline'>{navigator.platform.toUpperCase().includes('MAC') ? '⌘' : 'Ctrl'}</span>
                    <span className='font-bold'>K</span>
                </div>
            </button>

           
            {isOpen && (
                <div 
                    className='fixed inset-0 z-[100] bg-[#212529]/80 backdrop-blur-sm flex justify-center pt-20 transition-opacity'
                    onClick={handleClose}
                >
                    <div 
                        className='w-full max-w-2xl bg-[#212529] border border-[#E63946]/50 rounded-xl shadow-2xl p-6 relative overflow-hidden'
                        onClick={(e) => e.stopPropagation()} 
                    >
                       
                        <button 
                            onClick={handleClose}
                            className='absolute top-3 right-3 p-2 text-gray-500 hover:text-[#E63946] transition-colors duration-200'
                            aria-label="Cerrar"
                        >
                            <X className='w-6 h-6' />
                        </button>

                        <div className='flex items-center space-x-2 border-b border-[#FFB703] pb-3'>
                            <Search className='w-6 h-6 text-[#FFB703]' />
                            <input
                                id="search-input"
                                type="text"
                                placeholder="Busca posts, proyectos o tecnologías..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full bg-transparent text-white text-xl placeholder-gray-600 focus:outline-none'
                            />
                            {isSearching && (
                                <Zap className='w-5 h-5 text-[#E63946] animate-pulse' />
                            )}
                        </div>

                        <div className='mt-6 max-h-80 overflow-y-auto space-y-2'>
                            {searchQuery.length > 0 && searchResults.length === 0 && !isSearching && (
                                <p className='text-gray-500 text-center py-4'>No se encontraron resultados para "{searchQuery}".</p>
                            )}

                            {searchResults.map(result => (
                                <a
                                    key={result.id}
                                    href={`/${result.type.toLowerCase().includes('portafolio') ? 'portfolio' : 'blog'}/${result.slug}`}
                                    onClick={handleClose}
                                    className='group flex flex-col p-3 rounded-lg border border-[#212529] hover:border-[#FB8500]/50 hover:bg-[#212529]/70 transition-all duration-300'
                                >
                                    <p className='text-white font-medium group-hover:text-[#FFB703]'>{result.title}</p>
                                    <span className='text-xs text-gray-500'>{result.type}</span>
                                </a>
                            ))}
                            
                            {searchQuery.length === 0 && (
                                <p className='text-gray-500 text-center py-4'>Escribe al menos 3 caracteres para empezar a buscar.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}