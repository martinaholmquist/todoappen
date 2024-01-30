import React from "react"
import Link from "next/link"
import CustomButton from "@/components/CustomButton"

export default function Home() {
  return (
    <main className="">
      <div className="min-h-[100svh] min-w-full">
        <div className="absolute h-[100svh] min-w-full  -z-10 ">
          <div className="absolute inset-0 z-10" />
          <video
            autoPlay
            loop
            muted
            src={"/bock.mp4"}
            className=" object-cover w-full h-full fixed"
          />
        </div>
        <div className="">
          <div className="pt-24 flex-col flex justify-center  items-center text-[#41bd47] font-bold h-full w-full">
            <div className="flex w-full flex-col items-center justify-center  text-4xl ">
              <div className="text-center font-secondary-specing">
                <p className="">ToDo</p>
              </div>

              <div className="pt-48">
                <Link href={"/login"}>
                  <CustomButton
                    title="Kolla in dina ToDo's!"
                    btnType="button"
                    containerStyles="bg-white text-[#41bd47] text-2xl rounded-full min-w-[130px] "
                  />
                </Link>
              </div>
              <div className=" font-light pt-64 flex w-full flex-col items-center justify-center  text-2xl text-white mix-blend-difference">
                <p className="text-center">En app som håller koll åt dig!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
