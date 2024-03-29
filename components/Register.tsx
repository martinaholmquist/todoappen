"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useEffect } from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { UserProps } from "@/types"
import { useAuth } from "@/components/AuthContext"

export default function SignupPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    role: "USER", // Sätter rollen som standardvärde här
  })

  const auth = useAuth()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onSignup = async () => {
    if (!user.email || !user.password || !user.username) {
      setErrorMessage("Fyll i alla fält")
      return
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        user
      )

      if (!response || !response.data || !response.data.access_token) {
        console.error("Invalid response format:", response)
        setErrorMessage("Ogiltigt svar från servern")
        return
      }
      // Sparar access token i autentiseringskontexten
      auth.setAccessToken(response.data.access_token)
      console.log(
        "skriver ut response.data.access_token",
        response.data.access_token
      )

      router.push("/todo")
    } catch (error: any) {
      if (error.response) {
        console.error("Response error:", error.response.data)
      } else {
        console.error("Other error:", error.message)
      }
      console.log("Register failed, try again!!!!", error.message)
      setErrorMessage("Registrering misslyckades")
    }
  }
  const closeErrorMessage = () => {
    setErrorMessage(null)
  }

  return (
    <div className="pt-16">
      <div>
        <section className="relative z-10 pt-30 flex-col flex justify-center items-center h-full w-full">
          <div className="flex h-full items-center justify-center lg:justify-between">
            <div className="w-full h-full flex-wrap items-center justify-center lg:justify-between">
              <div>
                <Image
                  src="/green-check-mark-verified-circle-16223.svg"
                  alt="check logo"
                  width={250}
                  height={250}
                />
              </div>

              <div className="mt-10 mb-12 w-full h-full flex-wrap items-center justify-center lg:justify-between">
                <form>
                  {/* Username input */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="text-[#41bd47] peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none shadow-sm"
                      id="username"
                      placeholder="Username"
                      value={user.username}
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                    />
                    <label
                      htmlFor="username"
                      className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-[#41bd47] transition-all duration-200 ease-out ${
                        user.username
                          ? "text-[#41bd47] -translate-y-[1.15rem] scale-[0.8]"
                          : ""
                      }`}
                    >
                      Username
                    </label>
                  </div>

                  {/* Email input */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="text-[#41bd47] peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none shadow-sm"
                      id="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                    <label
                      htmlFor="email"
                      className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-[#41bd47] transition-all duration-200 ease-out ${
                        user.email
                          ? "text-[#41bd47] -translate-y-[1.15rem] scale-[0.8]"
                          : ""
                      }`}
                    >
                      Email
                    </label>
                  </div>

                  {/* Password input */}
                  <div className="relative mb-6">
                    <input
                      type="password"
                      className="text-[#41bd47] peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none shadow-sm"
                      id="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                    <label
                      htmlFor="password"
                      className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-[#41bd47] transition-all duration-200 ease-out ${
                        user.password
                          ? "text-[#41bd47] -translate-y-[1.15rem] scale-[0.8]"
                          : ""
                      }`}
                    >
                      Password
                    </label>
                  </div>

                  {/* Login button */}
                  <div className="text-center lg:text-left">
                    <button
                      title="Sign Up"
                      type="button"
                      className="text-[#41bd47] inline-block rounded px-7 pb-2.5 pt-3 text-sm shadow-lg transition duration-150 ease-in-out"
                      onClick={onSignup}
                    >
                      Registrera dig
                    </button>
                  </div>
                  {/*  
                  <Link href={"/todo"}>
                    <button
                      title="todo"
                      type="button"
                      className=" text-[#41bd47] inline-block rounded px-7 pb-2.5 pt-6 text-sm shadow-lg transition duration-150 ease-in-out"
                    >
                      todo så länge
                    </button>
                  </Link>
*/}
                  {/* Error message popup */}
                  {errorMessage && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                      <div className="bg-white p-4 rounded shadow-md">
                        <p>{errorMessage}</p>
                        <button
                          onClick={closeErrorMessage}
                          className="mt-4 text-sm text-white bg-[#41bd47] px-4 py-2 rounded"
                        >
                          Stäng
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
