'use client'
import React, { useMemo, useState } from 'react'
import { CardPost } from './elements';

export default function GridCardPosts({
  dataPostsServer = [],
  dataCategories = [],
}) {
  const [dataPosts] = useState(dataPostsServer);
  const [dataCategoriesPosts, setDataCategoriesPosts] = useState(
    [{ name: "Todos", slug: "todos" }, ...dataCategories].map((item, idx) => ({
      ...item,
      isSelected: idx === 0,
    }))
  );

  const filterData = useMemo(() => {
    const selected = dataCategoriesPosts.find((item) => item.isSelected);
    if (selected?.name?.toUpperCase() === "TODOS") return dataPosts;
    return dataPosts.filter((item) =>
      item?.categories?.some((cat) =>
        selected?.name?.toUpperCase().includes(cat?.name?.toUpperCase())
      )
    );
  }, [dataCategoriesPosts, dataPosts]);

  const handleChangeCategorie = (idx) => {
    setDataCategoriesPosts((prev) =>
      prev.map((item, key) => ({ ...item, isSelected: idx === key }))
    );
  };

  return (
    <div className="w-full">

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {dataCategoriesPosts.map((item, key) => (
          <button
            key={key}
            onClick={() => handleChangeCategorie(key)}
            className={`
              px-4 py-1.5 text-[10px] font-mono tracking-[0.25em] uppercase transition-all duration-200
              ${item.isSelected
                ? 'text-[#212529] bg-[#FB8500]'
                : 'text-[#ADB5BD] border border-[#E9ECEF]/20 hover:border-[#FB8500]/40 hover:text-[#FB8500]'
              }
            `}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filterData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E9ECEF]/10">
          {filterData.slice(0, 6).map((item, idx) => (
            <CardPost key={idx} data={item} />
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center min-h-[400px] border border-[#E9ECEF]/10">
          <p className="text-sm text-[#ADB5BD] font-light tracking-wide">
            Sin artículos para esta categoría.
          </p>
        </div>
      )}

    </div>
  );
}