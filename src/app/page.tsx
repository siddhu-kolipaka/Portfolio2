import Slide1 from "@/_components/Slide1";
import Slide2 from "@/_components/Slide2";
import Slide3 from "@/_components/Slide3";
import Slide4 from "@/_components/Slide4";
import Slide5 from "@/_components/Slide5";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
    </div>
  );
}
