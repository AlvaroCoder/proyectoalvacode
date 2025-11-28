'use client'
import CardConsultoring from "@/components/Cards/CardConsultoring";
import ViewBlogPrincipal from "@/components/Views/ViewBlogPrincipal";
import ViewWelcome from "@/components/Views/ViewWelcome";

export default function Home() {
  return (
    <div className=" w-full min-h-screen bg-azul_oscuro p-8">
      <ViewWelcome/>
      <ViewBlogPrincipal />
      <CardConsultoring/>
    </div>
  );
}