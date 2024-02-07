import Profile from "@/components/Profile"
import { UserProps } from "@/types"
import { NextPage } from "next"

interface Props {
  users: UserProps
}

const Page: NextPage<Props> = () => {
  return (
    <>
      <div>
        <Profile />
      </div>
    </>
  )
}

export default Page
