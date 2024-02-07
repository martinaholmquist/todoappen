"use client"

import React, { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import { AdminProps } from "@/types"
import { useAuth } from "@/components/AuthContext"
import { fetchAllUser } from "@/utils"
import AdminCard from "./AdminCard"

const AdminPage = ({}: AdminProps) => {
  const [oneUser, setOneUser] = useState<AdminProps[]>([])
  const [loading, setLoading] = useState(true)
  const auth = useAuth()
  const accessToken = auth.getAccessToken()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = auth.getAccessToken()
        console.log("här är min token", accessToken)

        if (accessToken !== null) {
          const user = await fetchAllUser(accessToken)

          setOneUser(user)
        } else {
          console.error("Access token is null")
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [auth]) //run the effect whenever auth changes to ensure working with the latest authentication information.

  const isDataEmpty = !Array.isArray(oneUser) || oneUser.length < 1 || !oneUser

  const tokenPayload = accessToken
    ? JSON.parse(atob(accessToken.split(".")[1]))
    : null
  const username = tokenPayload ? tokenPayload.Username.toUpperCase() : null

  const tokenPayloadRole = accessToken
    ? JSON.parse(atob(accessToken.split(".")[1]))
    : null
  const role = tokenPayloadRole ? tokenPayloadRole.Role.toUpperCase() : null

  return (
    <main className="overflow-hidden">
      {/* 
      <ToTheTopButton /> */}
      <Navbar />
      <Hero />
      <div className="home__profile-container">
        {username && (
          <h2 className="text-[#41bd47] text-xl font-bold">
            HEJ {username} DIN ROLL ÄR: {role}!
          </h2>
        )}
      </div>
      <div className="mt-10 padding-x padding-y max-with">
        {!isDataEmpty ? (
          <section>
            <div className="home__todos-wrapper">
              {oneUser?.map((user) => (
                <AdminCard key={user.id} users={user} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-[#41bd47] text-xl font-bold">
              Oops, inga resultat
            </h2>
          </div>
        )}
      </div>
    </main>
  )
}

export default AdminPage
