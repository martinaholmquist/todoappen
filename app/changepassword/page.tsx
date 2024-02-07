import ChangePassword from "@/components/ChangePassword"
import { UserProps } from "@/types"
import { NextPage } from "next"

interface Props {
  users: UserProps
}

const Page: NextPage<Props> = () => {
  return (
    <>
      <div>
        <ChangePassword />
      </div>
    </>
  )
}

export default Page
