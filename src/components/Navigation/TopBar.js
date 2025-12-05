'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X, Code } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('/'); 

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname === '/' ? '/' : window.location.pathname);
        }
    }, []);

    const links = [
        { route: "/", name: "Inicio" },
        { route: "/portfolio", name: "Portafolio" }, 
        { route: "/blog", name: "Blog" },
        { route: "/contact", name: "Contacto" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='w-full fixed top-0 z-50 text-white bg-[#212529]/90 backdrop-blur-sm shadow-xl border-b border-[#E63946]'>
            <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link
                        href={"/"}
                        className='flex items-center group'
                        onClick={() => setIsMenuOpen(false)} 
                    >
                        <img
                            width={40}
                            height={40}
                            alt='Imagen Logo AlvaCode'
                            src={"https://res.cloudinary.com/dabyqnijl/image/upload/c_thumb,w_200,g_face/v1707230326/logos/Group_21_ed6vbv.png"}
                            className='rounded-full transition-transform duration-300 group-hover:scale-110 w-10 h-10 ring-2 ring-[#FFB703]/50'
                        />
                        <h1 className='font-extrabold text-lg ml-3 tracking-wider text-white group-hover:text-[#FFB703] transition-colors duration-300'>
                            alvacode.<span className='text-[#E63946]'>dev</span>
                        </h1>
                    </Link>
                </div>

                <div className='sm:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB703]'
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-[#E63946]" />
                        ) : (
                            <Menu className="w-6 h-6 text-[#FFB703]" />
                        )}
                    </button>
                </div>

                <nav className='hidden sm:flex'>
                    <ul className='flex flex-row text-sm font-medium'>
                        {links.map(item =>
                            <li key={item.name} className='list-none mx-3'>
                                <Link 
                                    href={item.route}
                                    className={`
                                        px-3 py-1 pb-1 transition-all duration-300 ease-in-out block
                                        ${currentPath === item.route 
                                            ? 'text-[#E63946] border-b-2 border-[#E63946] font-semibold'
                                            : 'text-gray-300 hover:text-[#FFB703] hover:border-b-2 hover:border-[#FFB703]/50'
                                        }
                                        
                                    `}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>

            <nav className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <ul className='flex flex-col py-2 border-t border-[#E63946]/50'>
                    {links.map(item =>
                        <li key={item.name} className='list-none'>
                            <a
                                href={item.route}
                                onClick={toggleMenu}
                                className={`
                                    block px-6 py-3 text-base transition-colors duration-200
                                    ${currentPath === item.route
                                        ? 'bg-[#E63946]/20 text-[#E63946] font-semibold'
                                        : 'text-gray-300 hover:bg-[#FFB703]/10 hover:text-[#FFB703]'
                                    }
                                `}
                            >
                                {item.name}
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}