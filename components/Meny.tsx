"use client"
import Link from "next/link"
import { FC, useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import axios from "axios" // Importera axios för att göra HTTP-anrop
import { useAuth } from "@/components/AuthContext"
import router, { useRouter } from "next/navigation"

const MobileNavbarList = (props: { titelRef: string; titel: string }) => {
  return (
    <>
      <li className=" pb-2 text-black hover:text-primary">
        <Link href={props.titelRef}>{props.titel}</Link>
      </li>
    </>
  )
}

interface MobileNavBarProps {}

const Meny: FC<MobileNavBarProps> = ({}) => {
  const [isOpen, setOpen] = useState(false)
  const auth = useAuth() // Hämta autentiseringskontexten

  const router = useRouter()

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  const handleLogout = async () => {
    try {
      // Gör ett anrop till logout-endpoint och inkludera token i header
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      )

      auth.setAccessToken(null)
      localStorage.removeItem("accessToken")

      alert("Du är nu utloggad!")

      router.push("/")
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  console.log("är den satt till null nu då från meny?", auth.accessToken)
  return (
    <nav className="">
      <div className="">
        <button onClick={toggleMenu}>
          <Menu className={`text-black w-8 h-8 ${isOpen && "hidden"}`} />
        </button>
        <button onClick={toggleMenu}>
          <X className={`text-black w-8 h-8 ${!isOpen && "hidden"}`} />
        </button>
      </div>

      {isOpen && (
        <ul className="absolute top-2 left-2/3 mt- ">
          <MobileNavbarList titel={"HEM"} titelRef={"/"} />
          <MobileNavbarList titel={"PROFIL"} titelRef={"/profil"} />
          <li
            className="pb-2 text-black hover:text-primary cursor-pointer"
            onClick={handleLogout}
          >
            LOGGA UT
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Meny
