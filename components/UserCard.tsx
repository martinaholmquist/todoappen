"use client"

import { useState } from "react"
import { taskProps } from "@/types"
import CustomButton from "./CustomButton"
import Image from "next/image"
import { CalendarClock } from "lucide-react"

interface UserCardProps {
  tasks: taskProps
}

const UserCard = ({ tasks }: UserCardProps) => {
  if (!tasks) {
    return <div>task information not available</div>
  }

  const { id, task, dateoftask, timeoftask } = tasks

  return (
    <div className="family-card group">
      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center items-center gap-2">
          <CalendarClock />
          <p className="family-card__content-title">
            <p>{dateoftask}</p>
            <p>{timeoftask} </p>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src="/green-check-mark-verified-circle-16223.svg"
            width={20}
            height={20}
            alt="check image"
          />
          <p className="text-[14px]">
            <p>id: {id}</p>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src="/heart-outline.svg"
            width={30}
            height={30}
            alt="Antal familjemedlemmar eller nåt***"
          />
          <p className="text-[14px]">
            <p>task: {task}</p>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image src="/city-icon.png" width={20} height={20} alt="Stad" />
          <p className="text-[14px]">{id}</p>
        </div>
      </div>
      <div className="family-card__content">
        <h2 className="family-card__content-title">
          <p>date: {dateoftask}</p>

          {/* Include other properties as needed */}
        </h2>
      </div>
      <h3 className="">
        <p>time: {timeoftask} </p>
        <p>date: {dateoftask}</p>
      </h3>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/green-check-mark-verified-circle-16223.svg"
          fill
          priority
          alt="user pic"
          className="object-contain"
        />
      </div>

      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src="/green-check-mark-verified-circle-16223.svg"
            width={20}
            height={20}
            alt="check image"
          />
          <p className="text-[14px]">
            <p>id: {id}</p>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src="/heart-outline.svg"
            width={30}
            height={30}
            alt="Antal familjemedlemmar eller nåt***"
          />
          <p className="text-[14px]">
            <p>task: {task}</p>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image src="/city-icon.png" width={20} height={20} alt="Stad" />
          <p className="text-[14px]">{id}</p>
        </div>
      </div>

      <div className="relative flex w-full mt-2">
        <div className="family-card__btn-container">
          {/* 
          <CustomButton
            title="Nyfiken? Klicka här!"
            containerStyles="w-full py-[16px]
            rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] "
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />*/}
        </div>
      </div>
      {/* 
      <UserDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        task={tasks}
      /> */}
    </div>
  )
}

export default UserCard
