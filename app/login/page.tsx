import LogIn from "@/components/LogIn"
import { UserProps } from "@/types"
import { NextPage } from "next"

interface Props {
  users: UserProps
}

const Page: NextPage<Props> = () => {
  return (
    <>
      <div>
        <LogIn />
      </div>
    </>
  )
}

export default Page
