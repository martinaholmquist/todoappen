import Link from "next/link"
import Image from "next/image"
import Meny from "@/components/Meny"
import CustomButton from "@/components/CustomButton"

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/green-check-mark-verified-circle-16223.svg"
          alt="Har kan jag sätta en logga"
          width={100}
          height={100}
          className="object-contain"
        />
      </Link>
      <div className="">
        <Meny />
      </div>
    </nav>
  </header>
)

export default NavBar
