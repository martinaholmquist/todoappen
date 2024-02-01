import Profile from "@/components/Profile"
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
        <Profile
          id={0}
          timeoftask={""}
          username={""}
          email={""}
          tasks={[]}
          role={""}
        />
      </div>
    </>
  )
}

export default Page
