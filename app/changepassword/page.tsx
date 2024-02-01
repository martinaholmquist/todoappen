import ChangePassword from "@/components/ChangePassword"
import { UserProps } from "@/types"
import { NextPage } from "next"

interface Props {
  users: UserProps
}

const Page: NextPage<Props> = () => {
  // Antag att searchParams har blivit definierad tidigare eller hämtas dynamiskt

  return (
    <>
      <div>
        <ChangePassword />
      </div>
    </>
  )
}

export default Page
