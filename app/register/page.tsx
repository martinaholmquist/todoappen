import Register from "@/components/Register"
import { UserProps } from "@/types"
import { NextPage } from "next"

interface Props {
  users: UserProps
}

const Page: NextPage<Props> = () => {
  return (
    <>
      <div>
        <Register />
      </div>
    </>
  )
}

export default Page
