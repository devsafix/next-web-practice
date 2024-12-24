"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  console.log(router);

  const handleRoute = () => {
    router.push("/account");
  }

  return (
    <div className="flex items-center justify-center gap-5 py-20">

      <Link href={"/products"} className="p-2 bg-blue-500 text-white rounded">
        Navigate to product page
      </Link>
      <Link href={"/account"} className="p-2 bg-pink-500 text-white rounded">
        Navigate to account page
      </Link>


      <h1 onClick={handleRoute} className="p-2 bg-purple-500 text-white rounded">
        Navigate with alternative way
      </h1>

    </div>
  );
}
