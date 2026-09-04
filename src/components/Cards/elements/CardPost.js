'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ArrowRight } from 'lucide-react';

export default function CardPost({ data = {} }) {
  const { heading, description, categories, iconContent, slug } = data;

  return (
    <article className="group flex flex-col bg-[#343A40] border-b border-[#E9ECEF]/10 hover:bg-[#3D4349] transition-colors duration-300">

      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={iconContent?.url || 'https://placehold.co/600x400/212529/343A40?text=·'}
          alt={heading}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faLT300srRTcMk9eHL6nJEaK44OrVPoRmbWp8oAA"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-3">

        {/* Categories */}
        {categories?.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {categories.slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#FB8500]/70"
              >
                {item?.name}
              </span>
            ))}
          </div>
        )}

        {/* Heading */}
        <Link href={`/blog/${slug}`}>
          <h2 className="text-base font-light text-[#F8F9FA] leading-snug line-clamp-2 hover:text-[#FB8500] transition-colors duration-200 cursor-pointer">
            {heading}
          </h2>
        </Link>

        {/* Description */}
        <p className="text-sm text-[#ADB5BD] font-light leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* CTA */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase text-[#ADB5BD] hover:text-[#FB8500] transition-colors duration-200 pt-2"
        >
          Leer artículo
          <ArrowRight className="w-3 h-3" />
        </Link>

      </div>
    </article>
  );
}