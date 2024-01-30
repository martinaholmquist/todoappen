"use client"

import { Fragment } from "react"
import Image from "next/image"
import { Dialog, Transition } from "@headlessui/react"
import { UserProps } from "@/types"
import { taskProps } from "@/types"

interface UserDetailsProps {
  isOpen: boolean
  closeModal: () => void
  task: taskProps
}
const UserDetails = ({ isOpen, closeModal, task }: UserDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[90vh]
                  overflow-y-auto transform rounded-2xl bg-white p-6 text-left 
                  shadow-xl transition-all flex flex-col gap-5"
                >
                  <button
                    type="button"
                    className="p-3 flex items-center absolute top-2 
                    left-2 z-10 w-fit rounded-full bg-primary-blue "
                  >
                    <Image
                      src="/email.svg"
                      alt="email"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="text-white ml-2">Maila mig</span>
                  </button>

                  <button
                    type="button"
                    className="p-3 absolute top-2 right-2 z-10 w-fit rounded-full bg-primary-blue"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div
                      className="relative w-full h-40 bg-cover bg-center
                    rounded-lg"
                    >
                      {" "}
                      <Image
                        src="/green-check-mark-verified-circle-16223.svg"
                        fill
                        priority
                        alt="user pic"
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-[#507D9A] rounded-lg ">
                        <Image
                          src="/green-check-mark-verified-circle-16223.svg"
                          fill
                          priority
                          alt="user pic"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-[#507D9A] rounded-lg ">
                        <Image
                          src="/green-check-mark-verified-circle-16223.svg"
                          fill
                          priority
                          alt="user pic"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-[#507D9A] rounded-lg ">
                        <Image
                          src="/green-check-mark-verified-circle-16223.svg"
                          fill
                          priority
                          alt="user pic"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="ml-2 text-xl capitalize">{task.id}</h2>
                    <div className="mt-3 ml-2 flex flex-wrap gap-4">
                      {Object.entries(task).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">{key}</h4>
                          <p className="font-semibold mr-2">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default UserDetails
