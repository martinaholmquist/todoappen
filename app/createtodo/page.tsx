import CreateToDo from "@/components/CreateToDo"
import { taskProps } from "@/types"
import { NextPage } from "next"

interface Props {
  task: taskProps
}

const Page: NextPage<Props> = () => {
  return (
    <>
      <div>
        <CreateToDo />
      </div>
    </>
  )
}

export default Page
