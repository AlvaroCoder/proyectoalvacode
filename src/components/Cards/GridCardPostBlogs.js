import React from "react";
import { CardPost } from "./elements";

export default function GridCardPostBlogs({ dataBlogs = [] }) {
  return (
    <section className="w-full p-2 bg-[#212529]">
      {dataBlogs.length > 0 ? (
        <section className=" w-full grid grid-cols-1 md:grid-cols-2  gap-6 pt-4">
          {dataBlogs?.map((item, idx) => (
            <CardPost key={idx} data={item} />
          ))}
        </section>
      ) : (
        <section className="w-full  flex justify-center items-center min-h-[400px] text-gray-400 bg-[#212529]/50 rounded-lg p-6">
          <h1 className="text-lg font-medium text-white">
            Aún no hay data para esta categoría.
          </h1>
        </section>
      )}
    </section>
  );
}
