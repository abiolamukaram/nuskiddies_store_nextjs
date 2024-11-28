import Collections from "@/components/Collections";
import Productlist from "@/components/Productlist";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/banner1.jpg" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      {/* <Productlist /> */}
    </>
  );
}
