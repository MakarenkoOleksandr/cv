import AboutPage from "@/components/pages/about/AboutPage";
import Homepage from "@/components/pages/home/Homepage";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col text-2xl md:text-6xl text-center min-h-[300px]">
        <Homepage />
        <AboutPage />
      </div>
    </div>
  );
}
