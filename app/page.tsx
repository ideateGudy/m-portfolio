import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
import { CustomPageRefresh } from "@/components/ui/custom-page-refresh";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-x-clip px-5 sm:px-10">
       <CustomPageRefresh />
       <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Services />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
       </div>
    </main>
  );
}
