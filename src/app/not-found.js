import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className=" min-h-screen flex flex-col gap-4 items-center justify-center h-96  pt-36 bg-white inset-0 ">
      
        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center text-black">
          Il semble que cette page n&apos;existe pas
        </p>
        <Link
          className=" underline underline-offset-4  font-bold text-xl text-primary flex  duration-700 items-center gap-2"
          href="/"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </>
  );
}
