"use client"

import React, { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import { useAuth } from "@/components/AuthContext"
import Link from "next/link"

const Profile = ({}) => {
  const auth = useAuth()
  const accessToken = auth.getAccessToken()

  // Parse the token payload
  const tokenPayload = accessToken
    ? JSON.parse(atob(accessToken.split(".")[1]))
    : null
  const username = tokenPayload ? tokenPayload.Username.toUpperCase() : null

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <div className="home__profile-container">
        {username && (
          <h2 className="text-[#41bd47] text-xl font-bold">
            {username}'S PROFIL
          </h2>
        )}
      </div>

      <div className="flex items-center justify-center mt-10 ">
        <div className="add-todo__btn">
          <Link href="/changepassword">
            <button type="button" className="text-[#41bd47] text-xl font-bold">
              Byt lösenord
            </button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 ">
        <div className="add-todo__btn">
          <Link href="/endaccount">
            <button type="button" className="text-[#41bd47] text-xl font-bold">
              Avsluta konto
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Profile
