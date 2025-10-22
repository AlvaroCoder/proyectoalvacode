'use client'
import {  GridCardPosts  } from "@/components/Cards";
import ViewWelcome from "@/components/Views/ViewWelcome";
import { useFetch } from "@/utils/customHooks";
import { URL_PROJECT } from "@/utils/urls";

export default function Home() {
  const {dataResponse : dataPosts, loading : loadinDataPosts} = useFetch(URL_PROJECT.GET_POSTS);
  const {dataResponse : dataCategories, loading : loadingDataCategories} = useFetch(URL_PROJECT.GET_CATEGORIES);  
  
  return (
    <div className=" w-full min-h-screen bg-azul_oscuro p-8">
      <ViewWelcome/>
      <section className="w-full flex flex-col items-center">
        <h1 className="text-white text-3xl ">Blog</h1>
        <section className="w-full flex justify-center my-8 text-white">
          {
            (loadinDataPosts || loadingDataCategories) ? 
            <div>
              <h1>Cargando ...</h1>
            </div> :
            <GridCardPosts
            dataCategories={dataCategories}
            dataPostsServer={dataPosts?.contentComponents}
          />
          }
        </section>
      </section>
    </div>
  );
}