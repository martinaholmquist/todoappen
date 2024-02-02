"use client"
import React from "react"
import { useState } from "react"
import axios from "axios"
import { useAuth } from "@/components/AuthContext"
import Navbar from "./Navbar"
import Hero from "./Hero"
import { useRouter } from "next/navigation"

export default function EndAccountPage() {
  const auth = useAuth()
  const accessToken = auth.getAccessToken()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const router = useRouter()
  const onEnding = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/deactivateaccountwithlogout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      if (response.status === 200) {
        setSuccessMessage("Du är nu avregistrerad!")
        auth.setAccessToken(null)
        localStorage.removeItem("accessToken")
        router.push("/")
      } else {
        console.error("Invalid response format:", response)
        setErrorMessage("Ogiltigt svar från servern")
      }
    } catch (error: any) {
      console.log("Unregistration failed, try again!!!!", error.message)
      setErrorMessage("Avregistrering misslyckades")
    }
  }
  const closeErrorMessage = () => {
    setErrorMessage(null)
  }
  const closeSuccessMessage = () => {
    setSuccessMessage(null)
  }

  // Parse the token payload
  const tokenPayload = accessToken
    ? JSON.parse(atob(accessToken.split(".")[1]))
    : null
  const username = tokenPayload ? tokenPayload.Username.toUpperCase() : null

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <div className="home__profile-container">
        {username && (
          <h2 className="text-[#41bd47] text-xl font-bold">
            HÄR KAN DU AVREGISTRERA DITT KONTO, {username}
          </h2>
        )}
      </div>
      <div className="home__profile-container">
        {username && (
          <h2 className="text-[#41bd47] text-xl font-bold">
            {username} är du säker? Kommer sakna dig :-/
          </h2>
        )}
      </div>
      <div>
        <section className="relative z-10 pt-30 flex-col flex justify-center items-center h-full w-full">
          <div className="flex h-full items-center justify-center lg:justify-between">
            <div className="w-full h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mt-10 mb-12 w-full h-full flex-wrap items-center justify-center lg:justify-between">
                <form>
                  {/* Login button */}
                  <div className="text-center lg:text-left">
                    <button
                      title="Sign Up"
                      type="button"
                      className="text-[#41bd47] inline-block rounded px-7 pb-2.5 pt-3 text-sm shadow-xl transition duration-150 ease-in-out"
                      onClick={onEnding}
                    >
                      Avregistrera
                    </button>
                  </div>

                  {/* Success message popup */}
                  {successMessage && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#41bd47] bg-opacity-50">
                      <div className="bg-white p-4 rounded shadow-md">
                        <p>{successMessage}</p>
                        <button
                          onClick={closeSuccessMessage}
                          className="mt-4 text-sm text-white bg-[#41bd47] px-4 py-2 rounded"
                        >
                          Stäng
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Error message popup */}
                  {errorMessage && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                      <div className="bg-white p-4 rounded shadow-md">
                        <p>{errorMessage}</p>
                        <button
                          onClick={closeErrorMessage}
                          className="mt-4 text-sm text-white bg-gray-800  px-4 py-2 rounded"
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
