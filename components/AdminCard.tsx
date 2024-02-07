"use client"

import { useState } from "react"
import { AdminProps } from "@/types"
import CustomButton from "./CustomButton"
import axios from "axios"
import { useAuth } from "@/components/AuthContext"
import { useRouter } from "next/navigation"

interface AdminCardProps {
  users: AdminProps
}

const AdminCard = ({ users }: AdminCardProps) => {
  const auth = useAuth()

  const accessToken = auth.getAccessToken()
  const { id, username, email, active } = users

  const router = useRouter()

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/deleteuser/${users.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      console.log(response.data)
      router.refresh()
    } catch (error) {
      console.error("Error deleting user:", error)
    }
  }

  if (!users) {
    return <div>user information not available</div>
  }

  return (
    <div className="todo-card group">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          <p className="todo-card__content-title">
            <p>username: {username}</p>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="todo-card__content-title">
            <p>email: {email}</p>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="todo-card__content-title">
            <p>active: {active ? "ja" : "nej"}</p>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        {/* deleteknapp */}
        <div className="relative justify-center  mt-10">
          <div className="todo-card__btn-container ">
            <CustomButton
              containerStyles="w-full  py-[16px]
            rounded-full bg-[#41bd47]"
              textStyles="text-white text-[20px] leading-[17px]"
              title="Ta bort?"
              handleClick={handleDeleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCard
