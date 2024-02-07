import AdminPage from "@/components/AdminPage"
import { UserProps } from "@/types"
import { NextPage } from "next"
import { AdminProps } from "@/types"

interface Props {
  //users: UserProps
  users: AdminProps
}

const Page: NextPage<Props> = () => {
  return (
    <>
      <div>
        <AdminPage id={0} username={""} email={""} active={false} />
      </div>
    </>
  )
}

export default Page
