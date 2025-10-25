import Homepage from "@/components/pages/home/Homepage";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col text-6xl text-center min-h-[300px]">
        <Homepage />
      </div>
    </div>
  );
}
