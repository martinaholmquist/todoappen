"use client"

import { useState } from "react"
import axios from "axios"
import { useAuth } from "@/components/AuthContext"
import Navbar from "./Navbar"
import Hero from "./Hero"

export default function CreateToDoPage() {
  const [todo, setTodo] = useState({
    task: "",
    dateoftask: "",
    timeoftask: "",
  })
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const auth = useAuth()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const accessToken = auth.getAccessToken()

  const isValidDate = (dateString: string) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    return dateRegex.test(dateString)
  }

  const isValidTime = (timeString: string) => {
    const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/
    return timeRegex.test(timeString)
  }

  const onAddtask = async () => {
    if (
      !todo.task ||
      !isValidDate(todo.dateoftask) ||
      !isValidTime(todo.timeoftask)
    ) {
      setErrorMessage("Fyll i alla fält korrekt")
      return
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tasks/addtask",
        {
          task: todo.task,
          dateoftask: todo.dateoftask,
          timeoftask: todo.timeoftask,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      if (response.status === 200) {
        setSuccessMessage("Uppgiften har registrerats!")
        console.log("Task added successfully")
        // Reset
        setTodo({
          task: "",
          dateoftask: "",
          timeoftask: "",
        })
      } else {
        console.error("Invalid response format:", response)
        setErrorMessage("Ogiltigt svar från servern")
      }
    } catch (error: any) {
      console.log("Register of todo failed, try again!!!!", error.message)
      setErrorMessage("Registrering of todo misslyckades")
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
            HÄR KAN DU SKAPA TODO'S {username}
          </h2>
        )}
      </div>
      <div>
        <section className="relative z-10 pt-30 flex-col flex justify-center items-center h-full w-full">
          <div className="flex h-full items-center justify-center lg:justify-between">
            <div className="w-full h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mt-10 mb-12 w-full h-full flex-wrap items-center justify-center lg:justify-between">
                <form>
                  {/* task input */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="text-[#41bd47] peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none shadow-xl"
                      id="task"
                      placeholder=""
                      value={todo.task}
                      onChange={(e) =>
                        setTodo({ ...todo, task: e.target.value })
                      }
                    />
                    <label
                      htmlFor="task"
                      className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-[#41bd47] transition-all duration-200 ease-out ${
                        todo.task
                          ? "text-[#41bd47] -translate-y-[1.15rem] scale-[0.8]"
                          : ""
                      }`}
                    >
                      Uppgift
                    </label>
                  </div>

                  {/* dateoftask input */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="text-[#41bd47] peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none shadow-xl"
                      id="dateoftask"
                      placeholder=""
                      value={todo.dateoftask}
                      onChange={(e) =>
                        setTodo({ ...todo, dateoftask: e.target.value })
                      }
                    />
                    <label
                      htmlFor="dateoftask"
                      className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-[#41bd47] transition-all duration-200 ease-out ${
                        todo.dateoftask
                          ? "text-[#41bd47] -translate-y-[1.15rem] scale-[0.8]"
                          : ""
                      }`}
                    >
                      Datum (xxxx-xx-xx)
                    </label>
                  </div>

                  {/* timeoftask input */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="text-[#41bd47] peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none shadow-xl"
                      id="timeoftask"
                      placeholder=""
                      value={todo.timeoftask}
                      onChange={(e) =>
                        setTodo({ ...todo, timeoftask: e.target.value })
                      }
                    />
                    <label
                      htmlFor="timeoftask"
                      className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-[#41bd47] transition-all duration-200 ease-out ${
                        todo.timeoftask
                          ? "text-[#41bd47] -translate-y-[1.15rem] scale-[0.8]"
                          : ""
                      }`}
                    >
                      Tid (xx-xx)
                    </label>
                  </div>

                  {/* Add task button */}
                  <div className="pt-10 text-center lg:text-left">
                    <button
                      title="add task"
                      type="button"
                      className="text-[#41bd47] inline-block rounded px-7 pb-2.5 pt-3 text-sm shadow-xl transition duration-150 ease-in-out"
                      onClick={onAddtask}
                    >
                      Registrera uppgiften
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
                          className="mt-4 text-sm text-white bg-gray-800 px-4 py-2 rounded"
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
