'use client'
import { CardSearchNavigation, GridCardPosts, GridCardsLoadingPost } from "@/components/Cards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFetch } from "@/utils/customHooks";
import { URL_PROJECT } from "@/utils/urls";

export default function Home() {
  const {dataResponse : dataPosts, error : errorDataPosts, loading : loadinDataPosts} = useFetch(URL_PROJECT.GET_POSTS);
  const {dataResponse : dataCategories, error : errorDataCategories, loading : loadingDataCategories} = useFetch(URL_PROJECT.GET_CATEGORIES);  
    
  return (
    <div className=" w-full min-h-screen">
      <section className="bg-azul_oscuro h-96 flex flex-col items-center justify-center gap-4">
        <div className="w-max flex flex-col items-center">
          <h1 className="animate-typing  overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-naranja font-bold">Bienvenido a mi blog</h1>
        </div>
        <div className="mt-4 flex flex-row relative w-[500px]">
          <Input
            className="flex-1 bg-white rounded-full shadow-sm min-w-[500px]"
            placeholder="Buscar algun post ... "
            type="email"
          />
          <Button
            className="rounded-full bg-naranja hover:bg-naranja font-bold absolute right-0"
          >
            <h1 className="">Buscar</h1>
          </Button>
        </div>
      </section>
      <section className="w-full flex justify-center my-8 ">
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
    </div>
  );
}
