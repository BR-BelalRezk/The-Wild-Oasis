import Image from "next/image";
import Link from "next/link";
import theWildOasisLogo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <figure className="flex items-center gap-5 z-10">
        <Image
          src={theWildOasisLogo}
          alt="Logo"
          height={60}
          width={60}
          quality={100}
          priority
        />
        <figcaption className="capitalize text-xl font-semibold text-primary-50">
          the wild oasis
        </figcaption>
      </figure>
    </Link>
  );
}
