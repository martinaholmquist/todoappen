"use client"

import React, { useEffect, useState } from "react"
import UserCard from "@/components/UserCard"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import { fetchAllUsers } from "@/utils"
import { fetchUser } from "@/utils"
import { FilterProps } from "@/types"
import { UserProps } from "@/types"
import { taskProps } from "@/types"
import ToTheTopButton from "@/components/ToTheTopButton"
import { useAuth } from "@/components/AuthContext"
import { fetchUserTask } from "@/utils"

const Todo = ({}: taskProps) => {
  const [oneUserTask, setOneuserTask] = useState<taskProps[]>([])
  const [loading, setLoading] = useState(true)
  const auth = useAuth()

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

  return (
    <main className="overflow-hidden">
      {/* 
      <ToTheTopButton /> */}
      <Navbar />
      <Hero />
      <div className="mt-10 padding-x padding-y max-with">
        <div className="home__filters">
          <p>här låg serachbar förrut</p>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__familys-wrapper">
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
