"use client"
import Link from "next/link"
import { FC, useState } from "react"
import { Menu, X } from "lucide-react"
import axios from "axios"
import { useAuth } from "@/components/AuthContext"
import { useRouter } from "next/navigation"

const MobileNavbarList = (props: { titelRef: string; titel: string }) => {
  return (
    <>
      <li className="pb-2 mr-4 text-[20px] leading-[26px] font-bold">
        <Link href={props.titelRef}>{props.titel}</Link>
      </li>
    </>
  )
}

interface MobileNavBarProps {}

const Meny: FC<MobileNavBarProps> = ({}) => {
  const [isOpen, setOpen] = useState(false)
  const auth = useAuth()

  const router = useRouter()

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  const handleLogout = async () => {
    try {
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
          <Menu className={`text-black w-12 h-12 ${isOpen && "hidden"}`} />
        </button>
        <button onClick={toggleMenu}>
          <X className={`text-black w-12 h-12 ${!isOpen && "hidden"}`} />
        </button>
      </div>

      {isOpen && (
        <ul className=" absolute top-4 left-64">
          <MobileNavbarList titel={"PROFIL"} titelRef={"/profile"} />
          <MobileNavbarList titel={"TODO"} titelRef={"/todo"} />
          <li
            className="pb-2 text-[20px] leading-[26px] font-bold cursor-pointer"
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
