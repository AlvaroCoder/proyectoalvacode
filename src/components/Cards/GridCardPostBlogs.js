import React from "react";
import { CardPost } from "./elements";

export default function GridCardPostBlogs({ dataBlogs = [] }) {
    return (
        <div className="w-full">
            {dataBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E9ECEF]/10">
                    {dataBlogs.map((item, idx) => (
                        <CardPost key={idx} data={item} />
                    ))}
                </div>
            ) : (
                <div className="w-full flex justify-center items-center min-h-[400px] border border-[#E9ECEF]/10">
                    <p className="text-sm text-[#ADB5BD] font-light tracking-wide">
                        Sin artículos disponibles.
                    </p>
                </div>
            )}
        </div>
    );
}