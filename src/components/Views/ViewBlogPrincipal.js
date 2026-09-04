import { useFetch } from "@/utils/customHooks";
import { URL_PROJECT } from "@/utils/urls";
import React from "react";
import { GridCardPosts } from "../Cards";
import { Loader2 } from "lucide-react";

export default function ViewBlogPrincipal() {
  const { dataResponse: dataPosts, loading: loadingDataPosts } = useFetch(URL_PROJECT.GET_POSTS);
  const { dataResponse: dataCategories, loading: loadingDataCategories } = useFetch(URL_PROJECT.GET_CATEGORIES);

  return (
    <section className="w-full bg-[#343A40] py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#FB8500]" />
          <p className="font-mono text-[20px] tracking-[0.35em] uppercase text-[#FB8500]/70">
            Blog &amp; Conocimiento
          </p>
        </div>

        <div className="w-full flex justify-center">
          {loadingDataPosts || loadingDataCategories ? (
            <div className="w-full h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-[#ADB5BD]">
                <Loader2 className="animate-spin w-6 h-6 text-[#FB8500]" />
                <p className="text-sm font-light tracking-wide">Cargando artículos…</p>
              </div>
            </div>
          ) : (
            <GridCardPosts
              dataCategories={dataCategories || []}
              dataPostsServer={dataPosts || []}
            />
          )}
        </div>

      </div>
    </section>
  );
}