"use client"

import React, { useEffect, useState } from "react"
import UserCard from "@/components/UserCard"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import { taskProps } from "@/types"
import { useAuth } from "@/components/AuthContext"
import { fetchUserTask } from "@/utils"
import Link from "next/link"

const Todo = ({}: taskProps) => {
  const [oneUserTask, setOneuserTask] = useState<taskProps[]>([])
  const [loading, setLoading] = useState(true)
  const auth = useAuth()
  const accessToken = auth.getAccessToken()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = auth.getAccessToken()
        console.log("här är min token", accessToken)

        if (accessToken !== null) {
          const task = await fetchUserTask(accessToken)

          setOneuserTask(task)
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

  const isDataEmpty =
    !Array.isArray(oneUserTask) || oneUserTask.length < 1 || !oneUserTask

  const tokenPayload = accessToken
    ? JSON.parse(atob(accessToken.split(".")[1]))
    : null
  const username = tokenPayload ? tokenPayload.Username.toUpperCase() : null

  return (
    <main className="overflow-hidden">
      {/* 
      <ToTheTopButton /> */}
      <Navbar />
      <Hero />
      <div className="home__profile-container">
        {username && (
          <h2 className="text-[#41bd47] text-xl font-bold">HEJ {username}!</h2>
        )}
      </div>
      <div className="mt-10 padding-x padding-y max-with">
        <div className="add-todo__btn">
          <Link href="/createtodo">
            <button type="button" className="text-[#41bd47] text-xl  font-bold">
              Skapa en ToDo.
            </button>
          </Link>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__todos-wrapper">
              {oneUserTask?.map((task) => (
                <UserCard key={task.id} tasks={task} />
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

export default Todo
