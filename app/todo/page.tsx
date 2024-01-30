import Todo from "@/components/Todo"
import { FilterProps, UserProps } from "@/types"
import { NextPage } from "next"

interface Props {
  searchParams: FilterProps
  users: UserProps
}

const Page: NextPage<Props> = ({ searchParams }) => {
  // Antag att searchParams har blivit definierad tidigare eller hämtas dynamiskt

  return (
    <>
      <div>
        <Todo searchParams={searchParams} />
      </div>
    </>
  )
}

export default Page
