import { useFetch } from "@/utils/customHooks";
import { URL_PROJECT } from "@/utils/urls";
import React from "react";
import { GridCardPosts } from "../Cards";
import { Loader2 } from "lucide-react";

export default function ViewBlogPrincipal() {
  const { dataResponse: dataPosts, loading: loadingDataPosts } = useFetch(URL_PROJECT.GET_POSTS);
  const { dataResponse: dataCategories, loading: loadingDataCategories } = useFetch(URL_PROJECT.GET_CATEGORIES);
  
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="text-white text-3xl">Mi Blog</h1>
      <div className="w-full flex justify-center mb-8 text-white">
        {loadingDataPosts || loadingDataCategories ? (
          <div className="w-full h-[400px] flex items-center justify-center">
            <div>
              <h1>Se estan cargando los mejores blogs</h1>
              <Loader2 className="animate-spin" />
            </div>
          </div>
        ) : (
          <GridCardPosts
            dataCategories={dataCategories}
            dataPostsServer={dataPosts}
          />
        )}
      </div>
    </section>
  );
}
