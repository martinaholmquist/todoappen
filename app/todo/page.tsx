import Todo from "@/components/Todo"
import { FilterProps, UserProps } from "@/types"
import { NextPage } from "next"

interface Props {
  users: UserProps
}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <div>
        <Todo
          id={0}
          task={""}
          dateoftask={""}
          timeoftask={""}
          isPerformed={false}
        />
      </div>
    </>
  )
}

export default Page
