"use client"

import { useEffect, useState } from "react"
import { taskProps } from "@/types"
import CustomButton from "./CustomButton"
import Image from "next/image"
import { AlarmClockCheck, Calendar } from "lucide-react"
import { updateTask } from "@/utils"
import axios from "axios"
import { useAuth } from "@/components/AuthContext"
import Todo from "./Todo"
import { useRouter } from "next/navigation"

interface UserCardProps {
  tasks: taskProps
}

const UserCard = ({ tasks }: UserCardProps) => {
  const auth = useAuth()

  const accessToken = auth.getAccessToken() // Anropa funktionen för att få access token
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const { id, task, dateoftask, timeoftask, isPerformed } = tasks
  const router = useRouter()
  const handleTaskUpdate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tasks/updatetaskperformed",
        {
          id: tasks.id, // Skicka id för att identifiera uppgiften
          isPerformed: true,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      console.log(response.data)
      setShowSuccessModal(true)
      router.refresh()
    } catch (error: any) {
      if (error.response) {
        console.error("Response error:", error.response.data)
      } else {
        console.error("Other error:", error.message)
      }
      console.log("Update task failed, try again!!!!", error.message)
    }
  }

  if (!tasks) {
    return <div>task information not available</div>
  }

  return (
    <div className="family-card group">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          <AlarmClockCheck />
          <p className="family-card__content-title">
            <p>{timeoftask}</p>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Calendar />
          <p className="family-card__content-title">
            <p>{dateoftask}</p>
          </p>
        </div>
      </div>

      <div className="my-6 flex w-full justify-center">
        <p className="text-[30px] leading-[26px] font-bold capitalize">
          <p>{task}</p>
        </p>
      </div>

      <div className="relative w-full h-32 my-3 object-contain">
        <Image
          src="/green-check-mark-verified-circle-16223.svg"
          fill
          priority
          alt="user pic"
          className="object-contain"
        />
      </div>

      <div className="my-6 flex w-full justify-center">
        <p className="text-[30px] leading-[26px] font-bold capitalize">
          {isPerformed ? ` är klar` : ` är inte klar`}
        </p>
      </div>

      <div className="relative flex  mt-10">
        <div className="family-card__btn-container ">
          <CustomButton
            containerStyles="w-full  py-[16px]
            rounded-full bg-[#41bd47]"
            textStyles="text-white text-[20px] leading-[17px]"
            title="Klar?"
            handleClick={handleTaskUpdate}
          />
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-[#41bd47] p-2 rounded-md shadow-md flex flex-col items-center text-center">
            <p className="text-white text-lg font-bold ">Bra jobbat!</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              title="Done button"
              className="flex items-center justify-center"
            >
              <Image
                src="/close.svg"
                alt="closeIcon"
                width={35}
                height={35}
                className="object-center"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserCard
